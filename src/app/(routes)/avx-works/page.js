import Cta from "@/app/components/about/Cta";
import AvxInspectionLayer from "@/app/components/avx-works/AvxInspectionLayer";
import AVXJourneySection from "@/app/components/avx-works/AVXJourneySection";
import AvxStructure from "@/app/components/avx-works/AvxStructure";
import HeroSection from "@/app/components/avx-works/HeroSection";
import InteractionSection from "@/app/components/avx-works/InteractionSection";
import PerformanceVisibilitySection from "@/app/components/avx-works/PerformanceVisibilitySection";
import ReVerification from "@/app/components/avx-works/ReVerification";
import TransactionStructureSection from "@/app/components/avx-works/TransactionStructureSection";
import VehiclesListed from "@/app/components/avx-works/vehiclesListed";
import WhyThisMattersSection from "@/app/components/avx-works/WhyThisMattersSection";





export default function AvxWorksPage() {
    return (
        <>
            <HeroSection />
            <AvxStructure />
            <VehiclesListed />
            <AvxInspectionLayer />
            <InteractionSection />
            <PerformanceVisibilitySection />
            <ReVerification />
            <TransactionStructureSection />
            <AVXJourneySection />
            <WhyThisMattersSection />
            <Cta />
        </>
    );
}
