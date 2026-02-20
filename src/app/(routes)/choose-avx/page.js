import Cta from "@/app/components/about/Cta";
import AVXComparison from "@/app/components/choose-avx/AVXComparison";
import BuyersConsultantsSplit from "@/app/components/choose-avx/BuyersConsultantsSplit";
import ConsultantAccountability from "@/app/components/choose-avx/ConsultantAccountability";
import CoreDifferentiators from "@/app/components/choose-avx/CoreDifferentiators";
import HeroSection from "@/app/components/choose-avx/HeroSection";
import InspectionAdvantage from "@/app/components/choose-avx/InspectionAdvantage";
import PerformanceRanking from "@/app/components/choose-avx/PerformanceRanking";
import TrustVerification from "@/app/components/choose-avx/TrustVerification";

export default function AvxWorksPage() {
    return (
        <>
            <HeroSection />
            <CoreDifferentiators />
            <TrustVerification/>
            <InspectionAdvantage/>
            <PerformanceRanking/>
            <ConsultantAccountability/>
            <AVXComparison/>
            <BuyersConsultantsSplit/>
            <Cta/>
        </>
    );
}
