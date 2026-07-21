import type { Metadata } from "next";
import LegalReviewPage from "@/components/aitak/LegalReviewPage";
import { absoluteSiteUrl } from "@/config/seo";

const canonical = absoluteSiteUrl("/politica-de-privacidade");

export const metadata: Metadata = {
  title: "Política de Privacidade | Aitak Odontologia",
  description: "Página reservada para a Política de Privacidade da Aitak Odontologia.",
  ...(canonical ? { alternates: { canonical } } : {}),
  robots: {
    index: false,
    follow: false,
    noarchive: true,
    nosnippet: true,
    noimageindex: true,
    googleBot: {
      index: false,
      follow: false,
      noarchive: true,
      nosnippet: true,
      noimageindex: true,
    },
  },
};

// Placeholder intencional: o texto jurídico definitivo depende de revisão e aprovação profissional.
export default function PrivacyPolicyPage() {
  return <LegalReviewPage title="Política de Privacidade" />;
}
