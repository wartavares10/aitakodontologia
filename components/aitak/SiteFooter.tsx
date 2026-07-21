"use client";

import Image from "@/components/aitak/DirectImage";
import FooterBottomBar from "./FooterBottomBar";
import FooterBrand from "./FooterBrand";
import FooterContact from "./FooterContact";
import FooterCta from "./FooterCta";
import FooterInformation from "./FooterInformation";
import FooterNavigation from "./FooterNavigation";
import { FOOTER_ASSET_ROOT } from "./footer";
import useRevealOnce from "./useRevealOnce";

export default function SiteFooter() {
  const footerRef = useRevealOnce<HTMLElement>();

  return <footer id="rodape" className="site-footer" ref={footerRef}>
    <Image className="footer-decoration footer-curve" src={`${FOOTER_ASSET_ROOT}/decorative/01_footer_curve.svg`} alt="" width={1600} height={600} sizes="100vw" loading="lazy" decoding="async" unoptimized aria-hidden="true" />
    <Image className="footer-decoration footer-sparkles" src={`${FOOTER_ASSET_ROOT}/decorative/02_sparkles.svg`} alt="" width={400} height={400} sizes="300px" loading="lazy" decoding="async" unoptimized aria-hidden="true" />
    <div className="footer-inner">
      <FooterCta />
      <div className="footer-main">
        <FooterBrand />
        <FooterNavigation />
        <FooterContact />
        <FooterInformation />
      </div>
    </div>
    <FooterBottomBar />
  </footer>;
}
