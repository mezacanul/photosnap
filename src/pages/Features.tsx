import { useSelector } from "react-redux";
import { useResponsive } from "../hooks/useResponsive";
import type { RootState } from "../store";
import Beta from "../components/Beta";
import Section from "../components/Section";
import FeaturesGrid from "../components/Features/FeaturesGrid";

export default function Features() {
    const features = useSelector(
        (state: RootState) => state.content.features
    );
    return (
        <div>
            <Section
                title={features.hero.title}
                description={features.hero.description}
                image={useResponsive([
                    features.hero.image.main,
                    features.hero.image.tablet,
                    features.hero.image.main,
                ])}
                direction="left"
                cols={useResponsive([
                    "",
                    "4fr 3fr",
                    "2fr 3fr",
                ])}
                height="h-[90vh] md:h-[60vh]"
            />
            <FeaturesGrid items={features.items} />
            <Beta />
        </div>
    );
}
