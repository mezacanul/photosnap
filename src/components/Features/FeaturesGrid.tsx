import FeatureItem from "./FeatureItem";
import type { FeatureProps } from "../../types";

export default function FeaturesGrid({
    items,
}: {
    items: FeatureProps[];
}) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 px-container gap-x-18 gap-y-[7rem] py-[8rem]">
            {items.map((item: FeatureProps) => (
                <FeatureItem
                    key={item.image}
                    image={item.image}
                    title={item.title}
                    description={item.description}
                />
            ))}
        </div>
    );
}
