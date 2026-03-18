import FeatureItem from "./FeatureItem";
import type { FeatureProps } from "../../types";
import { cn } from "../../utils/cn";

export default function FeaturesGrid({
    items,
}: {
    items: FeatureProps[];
}) {
    return (
        <div className="w-full px-container py-[8rem]">
            <div
                className={cn(
                    "grid grid-cols-1 lg:grid-cols-3 gap-x-18 gap-y-[7rem]",
                    "w-full md:w-[60%] md:mx-auto lg:w-full"
                )}
            >
                {items.map((item: FeatureProps) => (
                    <FeatureItem
                        key={item.image}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </div>
        </div>
    );
}
