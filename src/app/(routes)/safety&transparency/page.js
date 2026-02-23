import CommunicationAccountability from "@/app/components/safety&transparency/CommunicationAccountability";
import ConsultantPerformance from "@/app/components/safety&transparency/ConsultantPerformance";
import DataPrivacy from "@/app/components/safety&transparency/DataPrivacy";
import DisputeReporting from "@/app/components/safety&transparency/DisputeReporting";
import FraudPrevention from "@/app/components/safety&transparency/FraudPrevention";
import InspectionTransparency from "@/app/components/safety&transparency/Inspection";
import MarketplaceModel from "@/app/components/safety&transparency/MarketplaceModal";
import SafetyCta from "@/app/components/safety&transparency/SafetyCta";
import SafetyHero from "@/app/components/safety&transparency/SafetyHero";
import SellerVerification from "@/app/components/safety&transparency/SellerVarification";
import UserResponsibility from "@/app/components/safety&transparency/UserResponsibility";


export default function SafetyAndTransparency() {
    return (
        <>
        <SafetyHero/>
        <MarketplaceModel/>
        <SellerVerification/>
        <InspectionTransparency/>
        <ConsultantPerformance/>
        <CommunicationAccountability/>
        <FraudPrevention/>
        <DisputeReporting/>
        <UserResponsibility/>
        <DataPrivacy/>
        <SafetyCta/>
        </>
    );
}
