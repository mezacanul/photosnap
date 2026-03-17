import { useSelector } from "react-redux";
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
                image={features.hero.image}
                direction="left"
                cols="2fr 3fr"
            />
            <FeaturesGrid items={features.items} />
            <Beta />
        </div>
    );
}
