import AVXJourneySection from "@/app/components/avx-works/AVXJourneySection";
import AvxHero from "@/app/components/avx-works/HeroSection";
import InteractionSection from "@/app/components/avx-works/InteractionSection";
import PerformanceVisibilitySection from "@/app/components/avx-works/PerformanceVisibilitySection";
import TransactionStructureSection from "@/app/components/avx-works/TransactionStructureSection";
import WhyThisMattersSection from "@/app/components/avx-works/WhyThisMattersSection";






export default function AvxWorksPage() {
    return (
        <>
        <AvxHero/>
        <InteractionSection/>
        <PerformanceVisibilitySection/>
        <TransactionStructureSection/>
        <AVXJourneySection/>
        <WhyThisMattersSection/>
        </>
    );
}
