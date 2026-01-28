import LandingContent from "@/features/landing/LandingContent";
import LandingHero from "@/features/landing/LandingHero";
import LandingNavbar from "@/features/landing/LandingNavbar";
import LandingFeatures from "@/features/landing/LandingFeatures";
import LandingSteps from "@/features/landing/LandingSteps";
import LandingFAQ from "@/features/landing/LandingFAQ";
import LandingFooter from "@/features/landing/LandingFooter";

export default function Home() {
  return (
    <div className="h-full">
      <LandingNavbar />
      <LandingHero />
      <LandingFeatures />
      <LandingSteps />
      <LandingContent />
      <LandingFAQ />
      <LandingFooter />
    </div>
  );
}
