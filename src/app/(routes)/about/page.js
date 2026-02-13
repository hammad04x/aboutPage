// app/about/components/FinalCTAAlt.jsx

import ComplianceAndTransparency from "@/app/components/Compliance&Transparency";
import ConsultantsAndBuyers from "@/app/components/ConsultantsAndBuyers";
import Cta from "@/app/components/Cta";
import HeroSection from "@/app/components/HeroSection";
import HowAvxWorks from "@/app/components/HowAvxWorks";
import VisionAndApproach from "@/app/components/OurVision&Approach";
import ProblemWeAreSolve from "@/app/components/ProblemWeAreSolve";
import TrustSignals from "@/app/components/TrustSignal";
import WhyAvxDifferent from "@/app/components/WhyAvxDifferent";



export default function FinalCTAAlt() {
    return (
        <>
            <HeroSection />
            <ProblemWeAreSolve />
            <WhyAvxDifferent />
            <HowAvxWorks />
            <ConsultantsAndBuyers />
            <TrustSignals />
            <VisionAndApproach />
            <ComplianceAndTransparency />
            <Cta />
        </>
    );
}
