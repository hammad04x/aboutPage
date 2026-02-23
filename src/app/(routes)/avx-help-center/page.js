import ArticlePage from "@/app/components/avx-help-center/ArticlePage";
import CategoryPage from "@/app/components/avx-help-center/CategoryPage";
import FAQSection from "@/app/components/avx-help-center/FAQSection";
import HelpHero from "@/app/components/avx-help-center/HelpHero";
import PopularTopicsGrid from "@/app/components/avx-help-center/PopularTopics";
import SupportBridge from "@/app/components/avx-help-center/SupportBridge";

export default function AvxHelpCenter() {
    return (
        <>
            <HelpHero />
            <PopularTopicsGrid />
            <CategoryPage />
            <FAQSection />
            <SupportBridge />
        </>
    );
}