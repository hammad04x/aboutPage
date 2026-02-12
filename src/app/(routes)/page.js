// app/about/components/FinalCTAAlt.jsx

import ComplianceAndTransparency from "../components/Compliance&Transparency";
import ConsultantsAndBuyers from "../components/ConsultantsAndBuyers";
import Cta from "../components/Cta";
import HeroSection from "../components/HeroSection";
import HowAvxWorks from "../components/HowAvxWorks";
import VisionAndApproach from "../components/OurVision&Approach";
import ProblemWeAreSolve from "../components/ProblemWeAreSolve";
import TrustSignal from "../components/TrustSignal";
import WhyAvxDifferent from "../components/WhyAvxDifferent";

export default function FinalCTAAlt() {
    return (
        <>
            <HeroSection />
            <ProblemWeAreSolve />
            <WhyAvxDifferent />
            <HowAvxWorks />
            <ConsultantsAndBuyers />
            <TrustSignal />
            <VisionAndApproach />
            <ComplianceAndTransparency />
            <Cta />
        </>
    );
}
