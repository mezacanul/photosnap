import type { TierProps } from "../../types";
import { cn } from "../../utils/cn";
import PeriodToggle from "./PeriodToggle";
import TierCard from "./TierCard";

export default function TierOptions({
    items,
}: {
    items: TierProps[];
}) {
    return (
        <div className="flex flex-col gap-15">
            <PeriodToggle />
            <div
                className={cn(
                    "flex flex-col gap-10",
                    "lg:grid lg:grid-cols-3 items-center"
                )}
            >
                {items.map((item) => (
                    <TierCard
                        key={item.title}
                        item={item}
                    />
                ))}
            </div>
        </div>
    );
}
