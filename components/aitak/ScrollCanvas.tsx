"use client";
import Image from "next/image";
import { useEffect, useRef, useState, type RefObject } from "react";

const HERO_ASSET_VERSION = "20260719";
export const FIRST_HERO_FRAME = `/assets/aitak/hero-implant-frames/ezgif-frame-001.webp?v=${HERO_ASSET_VERSION}`;
const FRAME_COUNT = 25;
const frameSource = (index: number) => `/assets/aitak/hero-implant-frames/ezgif-frame-${String(index + 1).padStart(3, "0")}.webp?v=${HERO_ASSET_VERSION}`;
const clamp = (value: number, min = 0, max = 1) => Math.min(max, Math.max(min, value));

type IdleDeadlineLike = { didTimeout: boolean; timeRemaining: () => number };
type IdleWindow = Window & {
  requestIdleCallback?: (callback: (deadline: IdleDeadlineLike) => void, options?: { timeout: number }) => number;
  cancelIdleCallback?: (handle: number) => void;
};

type Props = { sectionRef: RefObject<HTMLElement | null>; stageRef: RefObject<HTMLDivElement | null> };

export default function ScrollCanvas({ sectionRef, stageRef }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fallbackRef = useRef<HTMLImageElement>(null);
  const fillRef = useRef<HTMLSpanElement>(null);
  const meterRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(0);
  const [settled, setSettled] = useState(0);
  const [canvasReady, setCanvasReady] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current, fallback = fallbackRef.current, section = sectionRef.current, stage = stageRef.current;
    if (!canvas || !fallback || !section || !stage) return;
    const context = canvas.getContext("2d", { alpha: false });
    if (!context) return;

    let disposed = false;
    let idleHandle = 0, idleTimer = 0, rafId = 0;
    let requestedFrame = 0, renderedFrame = -1, settledFrames = 0;
    let needsResize = true, hasDrawnCanvas = false;
    const images: Array<HTMLImageElement | null> = new Array(FRAME_COUNT).fill(null);
    const available = new Set<number>();
    const backgroundQueue = Array.from({ length: FRAME_COUNT - 3 }, (_, index) => index + 3);
    const imageCleanups: Array<() => void> = [];
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const nearest = (requested: number) => {
      const wanted = Math.round(clamp(requested, 0, FRAME_COUNT - 1));
      for (let distance = 0; distance < FRAME_COUNT; distance += 1) {
        const before = wanted - distance, after = wanted + distance;
        if (before >= 0 && available.has(before)) return before;
        if (after < FRAME_COUNT && available.has(after)) return after;
      }
      return -1;
    };

    const drawFrame = (requested: number, force = false) => {
      const imageIndex = nearest(requested);
      if (imageIndex < 0 || (!force && imageIndex === renderedFrame)) return;
      const image = images[imageIndex];
      if (!image) return;
      const width = canvas.clientWidth, height = canvas.clientHeight;
      if (!width || !height) return;
      const scale = Math.max(width / image.naturalWidth, height / image.naturalHeight);
      const drawWidth = image.naturalWidth * scale, drawHeight = image.naturalHeight * scale;
      const x = (width - drawWidth) / 2;
      const y = (height - drawHeight) / 2;
      context.clearRect(0, 0, width, height);
      context.imageSmoothingEnabled = true;
      context.imageSmoothingQuality = "high";
      context.drawImage(image, x, y, drawWidth, drawHeight);
      renderedFrame = imageIndex;
      if (!hasDrawnCanvas) {
        hasDrawnCanvas = true;
        setCanvasReady(true);
      }
    };

    const resizeCanvas = () => {
      const bounds = canvas.getBoundingClientRect(), dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.round(bounds.width * dpr));
      canvas.height = Math.max(1, Math.round(bounds.height * dpr));
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      renderedFrame = -1;
    };

    const setProgress = (progress: number) => {
      const strength = (center: number, range: number) => 0.58 + 0.42 * (1 - clamp(Math.abs(progress - center) / range));
      stage.style.setProperty("--benefit-one", strength(0.05, 0.52).toFixed(3));
      stage.style.setProperty("--benefit-two", strength(0.5, 0.48).toFixed(3));
      stage.style.setProperty("--benefit-three", strength(0.95, 0.52).toFixed(3));
      fillRef.current?.style.setProperty("transform", `scaleX(${progress.toFixed(4)})`);
      meterRef.current?.setAttribute("aria-valuenow", String(Math.round(progress * 100)));
    };

    const renderFromScroll = () => {
      rafId = 0;
      const resized = needsResize;
      if (resized) {
        resizeCanvas();
        needsResize = false;
      }

      const distance = Math.max(1, section.offsetHeight - stage.clientHeight);
      const progress = reduced ? 0 : clamp(-section.getBoundingClientRect().top / distance);
      requestedFrame = Math.round(progress * (FRAME_COUNT - 1));
      ensureNearbyFrames(requestedFrame);
      setProgress(progress);
      drawFrame(requestedFrame, resized);
    };

    const requestRender = () => {
      if (!rafId) rafId = requestAnimationFrame(renderFromScroll);
    };

    const onScroll = () => requestRender();

    const registerFrame = (index: number, image: HTMLImageElement) => {
      let finished = false, completionRaf = 0;
      images[index] = image;

      const finish = async (succeeded: boolean) => {
        if (disposed || finished) return;
        finished = true;
        if (succeeded) {
          try {
            await image.decode();
          } catch {
            succeeded = image.naturalWidth > 0;
          }
        }
        if (disposed) return;
        if (succeeded) {
          available.add(index);
          setLoaded(available.size);
        }
        settledFrames += 1;
        setSettled(settledFrames);
        requestRender();
      };

      const onLoad = () => { void finish(true); };
      const onError = () => { void finish(false); };
      image.addEventListener("load", onLoad);
      image.addEventListener("error", onError);

      if (image.complete) {
        completionRaf = requestAnimationFrame(() => { void finish(image.naturalWidth > 0); });
      }

      imageCleanups.push(() => {
        image.removeEventListener("load", onLoad);
        image.removeEventListener("error", onError);
        if (completionRaf) cancelAnimationFrame(completionRaf);
      });
    };

    const loadFrame = (index: number, priority: "high" | "low" = "low") => {
      if (index < 0 || index >= FRAME_COUNT || images[index]) return;
      const image = new window.Image();
      image.decoding = "async";
      image.fetchPriority = priority;
      image.src = frameSource(index);
      registerFrame(index, image);
    };

    function ensureNearbyFrames(index: number) {
      [index, index + 1, index - 1, index + 2, index - 2].forEach((frame, position) => {
        loadFrame(frame, position < 3 ? "high" : "low");
      });
    }

    const scheduleIdleBatch = () => {
      const idleWindow = window as IdleWindow;
      const runBatch = (deadline?: IdleDeadlineLike) => {
        idleHandle = 0;
        idleTimer = 0;
        let requested = 0;
        while (backgroundQueue.length && requested < 4 && (!deadline || deadline.didTimeout || deadline.timeRemaining() > 6 || requested < 2)) {
          const frame = backgroundQueue.shift();
          if (frame !== undefined && !images[frame]) {
            loadFrame(frame);
            requested += 1;
          }
        }
        if (backgroundQueue.length && !disposed) scheduleIdleBatch();
      };

      if (idleWindow.requestIdleCallback) {
        idleHandle = idleWindow.requestIdleCallback(runBatch, { timeout: 1200 });
      } else {
        idleTimer = window.setTimeout(() => runBatch(), 180);
      }
    };

    const observer = new ResizeObserver(() => {
      needsResize = true;
      requestRender();
    });
    observer.observe(canvas);

    registerFrame(0, fallback);
    if (!reduced) {
      loadFrame(1, "high");
      loadFrame(2, "high");
      scheduleIdleBatch();
      window.addEventListener("scroll", onScroll, { passive: true });
    }
    requestRender();

    return () => {
      disposed = true;
      if (idleTimer) clearTimeout(idleTimer);
      const idleWindow = window as IdleWindow;
      if (idleHandle && idleWindow.cancelIdleCallback) idleWindow.cancelIdleCallback(idleHandle);
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
      imageCleanups.forEach(cleanup => cleanup());
    };
  }, [sectionRef, stageRef]);

  const ready = canvasReady && settled === FRAME_COUNT;
  return <>
    <Image ref={fallbackRef} className={`sequence-fallback${canvasReady ? " is-hidden" : ""}`} src={FIRST_HERO_FRAME} alt="" width={1920} height={1080} priority sizes="100vw" unoptimized aria-hidden="true" />
    <canvas className={`sequence-canvas${canvasReady ? " is-ready" : ""}`} ref={canvasRef} aria-hidden="true"/>
    <div className={`sequence-loader${ready ? " is-ready" : ""}`} aria-live="polite"><span className="loader-dot" aria-hidden="true"/><span>{loaded > 0 ? `Preparando experiência · ${Math.round(loaded / FRAME_COUNT * 100)}%` : "Carregando experiência"}</span></div>
    <div className="scroll-cue" ref={meterRef} role="progressbar" aria-label="Progresso da demonstração do implante" aria-valuemin={0} aria-valuemax={100} aria-valuenow={0}><span>Role para explorar</span><span className="scroll-track" aria-hidden="true"><span className="scroll-fill" ref={fillRef}/></span></div>
  </>;
}
