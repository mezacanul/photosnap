import Section from "../components/Section";
import StoriesGrid from "../components/Stories/StoriesGrid";
import FeaturesGrid from "../components/Features/FeaturesGrid";
import { useSelector } from "react-redux";
import type { RootState } from "../store";
import {
    selectFeatures,
    selectStories,
} from "../store/features/contentSlice";
import { useResponsive } from "../hooks/useResponsive";

export default function Home() {
    const { hero, about } = useSelector(
        (state: RootState) => state.content.home
    );
    const stories = useSelector(selectStories);
    const features = useSelector(selectFeatures);
    return (
        <>
            <Section
                title={hero.title}
                description={hero.description}
                button={hero.button}
                image={hero.image}
                type="dark"
                height="h-[90vh] md:h-screen"
                direction="left"
                cols={useResponsive([
                    "7fr 6fr",
                    "8fr 5fr",
                    "6fr 7fr",
                ])}
            />
            <Section
                title={about[0].title}
                description={about[0].description}
                button={about[0].button}
                image={about[0].image}
                type="light"
                // height="h-[75vh]"
                // direction="left"
                cols="7fr 6fr"
            />
            <Section
                title={about[1].title}
                description={about[1].description}
                button={about[1].button}
                image={about[1].image}
                type="light"
                // height="h-[75vh]"
                direction="left"
                cols="6fr 7fr"
            />
            <StoriesGrid items={stories} />
            <FeaturesGrid items={features} />
        </>
    );
}
