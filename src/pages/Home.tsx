import Section from "../components/Section";
import StoriesGrid from "../components/Stories/StoriesGrid";
import FeaturesGrid from "../components/Features/FeaturesGrid";
import { useSelector } from "react-redux";
import type { RootState } from "../store";

export default function Home() {
    const { hero, about } = useSelector(
        (state: RootState) => state.content.home
    );
    const stories = useSelector((state: RootState) =>
        state.content.stories.items.slice(0, 4)
    );
    const features = useSelector((state: RootState) =>
        state.content.features.items.slice(0, 3)
    );
    return (
        <>
            <Section
                title={hero.title}
                description={hero.description}
                button={hero.button}
                image={hero.image}
                type="dark"
                height="h-screen"
                direction="left"
                cols="6fr 7fr"
            />
            <Section
                title={about[0].title}
                description={about[0].description}
                button={about[0].button}
                image={about[0].image}
                type="light"
                height="h-[75vh]"
                // direction="left"
                cols="7fr 6fr"
            />
            <Section
                title={about[1].title}
                description={about[1].description}
                button={about[1].button}
                image={about[1].image}
                type="light"
                height="h-[75vh]"
                direction="left"
                cols="6fr 7fr"
            />
            <StoriesGrid items={stories} />
            <FeaturesGrid items={features} />
        </>
    );
}
