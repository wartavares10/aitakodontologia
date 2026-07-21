import Header from "@/components/aitak/Header";
import AnxiousPatientsSection from "@/components/aitak/AnxiousPatientsSection";
import ClinicSection from "@/components/aitak/ClinicSection";
import FinalCtaSection from "@/components/aitak/FinalCtaSection";
import FaqSection from "@/components/aitak/FaqSection";
import InsuranceSection from "@/components/aitak/InsuranceSection";
import LocationSection from "@/components/aitak/LocationSection";
import ProcessSection from "@/components/aitak/ProcessSection";
import PreAppointmentSection from "@/components/aitak/PreAppointmentSection";
import ScrollSequenceHero from "@/components/aitak/ScrollSequenceHero";
import TeamSection from "@/components/aitak/TeamSection";
import TechnologySection from "@/components/aitak/TechnologySection";
import TestimonialsSection from "@/components/aitak/TestimonialsSection";
import TreatmentsSection from "@/components/aitak/TreatmentsSection";
import SiteFooter from "@/components/aitak/SiteFooter";

export default function Home() {
  return <>
    <main><Header /><ScrollSequenceHero /><TreatmentsSection /><TechnologySection /><ProcessSection /><TeamSection /><InsuranceSection /><ClinicSection /><AnxiousPatientsSection /><TestimonialsSection /><FinalCtaSection /><FaqSection /><LocationSection /><PreAppointmentSection /></main>
    <SiteFooter />
  </>;
}
