import Image from "@/components/aitak/DirectImage";
import { FOOTER_ASSET_ROOT } from "./footer";

export default function FooterBottomBar() {
  const currentYear = new Date().getFullYear();

  return <div className="footer-bottom">
    <span className="footer-lotus" aria-hidden="true"><Image src={`${FOOTER_ASSET_ROOT}/decorative/03_lotus_separator.svg`} alt="" width={50} height={34} loading="lazy" decoding="async" unoptimized /></span>
    <p>© {currentYear} Aitak Odontologia. Todos os direitos reservados.</p>
    <p className="footer-bottom-care">Cuidado em cada detalhe.<span aria-hidden="true">✦</span></p>
  </div>;
}
