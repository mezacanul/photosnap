import { useSelector } from "react-redux";
import type { RootState } from "../store";
import Section from "../components/Section";
import Beta from "../components/Beta";
import TierOptions from "../components/Pricing/TierOptions";
import CompareTable from "../components/Pricing/CompareTable";
import { useResponsive } from "../hooks/useResponsive";

export default function Pricing() {
    const pricing = useSelector(
        (state: RootState) => state.content.pricing
    );
    return (
        <div>
            <Section
                title={pricing.hero.title}
                description={pricing.hero.description}
                image={pricing.hero.image}
                direction="left"
                cols={useResponsive([
                    "",
                    "4fr 3fr",
                    "2fr 3fr",
                ])}
                height="h-[90vh] md:h-[60vh]"
            />
            <div className="flex flex-col gap-[6rem] px-container py-[6rem]">
                <TierOptions
                    items={pricing.options.items}
                />
                <CompareTable tableData={pricing.compare} />
            </div>
            <Beta />
        </div>
    );
}
