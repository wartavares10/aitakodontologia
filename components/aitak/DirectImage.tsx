import NextImage, { type ImageProps } from "next/image";

/**
 * Serves the pre-optimized local assets directly. The production host does not
 * provide the image transformation binding expected by Vinext, so routing
 * these files through /_vinext/image would make otherwise valid WebP files
 * unavailable.
 */
export default function DirectImage(props: ImageProps) {
  return <NextImage {...props} unoptimized />;
}
