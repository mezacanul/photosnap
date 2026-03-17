import type { TierProps } from "../../types";
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
            <div className="grid grid-cols-3 items-center gap-10">
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
