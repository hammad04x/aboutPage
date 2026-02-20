import AccountabilityTrust from "@/app/components/consultant/AccountabilityTrust";
import ConsultantHeroSection from "@/app/components/consultant/ConsultantHero";
import ConsultCta from "@/app/components/consultant/ConsultCta";
// import FullPricing from "@/app/components/consultant/FullPricing";
import GrowthTools from "@/app/components/consultant/GrowthTools";
import InspectionAdvantage from "@/app/components/consultant/InspectionAdvantage";
import OnboardingProcess from "@/app/components/consultant/OnBoardingProcess";
import PerformanceDashboard from "@/app/components/consultant/PerformanceDashboard";
import TierStructure from "@/app/components/consultant/TierStructure";
import WhatYouGet from "@/app/components/consultant/WhatYouGet";
import WhoItsFor from "@/app/components/consultant/WhoItsFor";

export default function ConsultantPage() {
    return (
        <>
        <ConsultantHeroSection/>
        <WhoItsFor/>
        <WhatYouGet/>
        <PerformanceDashboard/>
        <InspectionAdvantage/>
        <GrowthTools/>
        <TierStructure/>
        <OnboardingProcess/>
        <AccountabilityTrust/>
        <ConsultCta/>
        {/* <FullPricing/> */}
        </>
    );
}
