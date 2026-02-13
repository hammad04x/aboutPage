import ReVerification from "../components/avx-works/ReVerification";
import VehiclesListed from "../components/avx-works/vehiclesListed";
import AVXJourneySection from "@/app/components/avx-works/AVXJourneySection";
import AvxHero from "@/app/components/avx-works/HeroSection";
import InteractionSection from "@/app/components/avx-works/InteractionSection";
import PerformanceVisibilitySection from "@/app/components/avx-works/PerformanceVisibilitySection";
import TransactionStructureSection from "@/app/components/avx-works/TransactionStructureSection";
import WhyThisMattersSection from "@/app/components/avx-works/WhyThisMattersSection";


import Cta from "../components/about/Cta";
import AvxInspectionLayer from "../components/avx-works/AvxInspectionLayer";
import AvxStructure from "../components/avx-works/AvxStructure";




export default function AvxWorksPage() {
    return (
        <>
         <VehiclesListed/>
         <ReVerification/>
        <AvxHero/>
        <InteractionSection/>
        <PerformanceVisibilitySection/>
        <TransactionStructureSection/>
        <AVXJourneySection/>
        <WhyThisMattersSection/>
          <AvxStructure/>
          <AvxInspectionLayer/>
          <Cta/>
        </>
    );
}
