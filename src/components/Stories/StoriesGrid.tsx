import StoryCard from "./StoryCard";
import type { StoryProps } from "../../types";

export default function StoriesGrid({
    items,
}: {
    items: StoryProps[];
}) {
    return (
        <div className="grid grid-cols-4">
            {items.map((item: StoryProps) => (
                <StoryCard
                    key={item.image}
                    image={item.image}
                    title={item.title}
                    author={item.author}
                />
            ))}
        </div>
    );
}
