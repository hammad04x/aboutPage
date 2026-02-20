import FAQ from "@/app/components/pricing/Faq";
import FullPricing from "@/app/components/pricing/FullPricing";
import NoCommissionModel from "@/app/components/pricing/NoCommissionModel";
import PricingHero from "@/app/components/pricing/PricingHero";
import TierCta from "@/app/components/pricing/TierCta";


export default function ConsultantPage() {
    return (
        <>
        <PricingHero/>
        <FullPricing/>
        <NoCommissionModel/>
        <FAQ/>
        <TierCta/>
        </>
    );
}
