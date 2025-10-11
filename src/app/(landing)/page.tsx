import LandingContent from "@/features/landing/LandingContent";
import LandingHero from "@/features/landing/LandingHero";
import LandingNavbar from "@/features/landing/LandingNavbar";

export default function Home() {
  return (
    <div className="h-full">
      <LandingNavbar />
      <LandingHero />
      <LandingContent />
    </div>
  );
}
