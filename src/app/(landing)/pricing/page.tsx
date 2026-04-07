import LandingPricing from "@/features/landing/LandingPricing";
import LandingNavbar from "@/features/landing/LandingNavbar";
import LandingFooter from "@/features/landing/LandingFooter";

export default function PricingPage() {
  return (
    <div className="h-full">
      <LandingNavbar />
      <div className="pt-20">
        <LandingPricing />
      </div>
      <LandingFooter />
    </div>
  );
}
