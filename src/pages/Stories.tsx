import { useSelector } from "react-redux";
import type { RootState } from "../store";
import StoriesGrid from "../components/Stories/StoriesGrid";
import Hero from "../components/Stories/Hero";

export default function Stories() {
    const stories = useSelector(
        (state: RootState) => state.content.stories
    );
    return (
        <div>
            <Hero />
            <StoriesGrid items={stories.items} />
        </div>
    );
}
