import type { PricingPeriod, TierProps } from "../../types";
import { cn } from "../../utils/cn";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import usePricingPeriod from "../../store/ui";

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

function TierCard({ item }: { item: TierProps }) {
    const { price } = item;
    const { periodSuffix, button } = useSelector(
        (state: RootState) => state.content.pricing.options
    );
    const selectedPeriod = usePricingPeriod(
        (state) => state.period
    );
    const isHighlited = item.title === "Pro";

    const cns = {
        cardContainer: cn(
            isHighlited
                ? "bg-black py-25 text-white"
                : "bg-zinc-200/50 py-15 text-black",
            "flex flex-col px-10 items-center justify-center gap-[2.7rem]"
        ),
        innerContainer: cn(
            "flex flex-col items-center justify-center"
        ),
    };
    return (
        <div className={cns.cardContainer}>
            <div className={cns.innerContainer}>
                <h1 className="text-3 mb-4">
                    {item.title}
                </h1>
                <p
                    className={cn(
                        "text-4-regular text-center",
                        isHighlited
                            ? "text-neutral-400"
                            : "text-neutral-500"
                    )}
                >
                    {item.description}
                </p>
            </div>
            <div className={cns.innerContainer}>
                <h1 className="text-2">
                    {selectedPeriod === "Monthly"
                        ? price.monthly
                        : price.yearly}
                </h1>
                <p
                    className={
                        isHighlited
                            ? "text-neutral-400"
                            : "text-neutral-500"
                    }
                >
                    {selectedPeriod === "Monthly"
                        ? periodSuffix.month
                        : periodSuffix.year}
                </p>
            </div>
            <Button
                text={button}
                type={isHighlited ? "light" : "dark"}
            />
        </div>
    );
}

function Button({
    text,
    type,
}: {
    text: string;
    type: "light" | "dark";
}) {
    const cns = {
        button: cn(
            "w-full py-3 text-5-regular cursor-pointer",
            type === "light"
                ? "bg-white text-black"
                : "bg-black text-white"
        ),
    };
    return <button className={cns.button}>{text}</button>;
}

function PeriodToggle() {
    const period = usePricingPeriod(
        (state) => state.period
    );
    const setPeriod = usePricingPeriod(
        (state) => state.setPeriod
    );
    const cns = (isSelected: boolean) => {
        return cn(
            "text-4-bold transition-all duration-300",
            isSelected ? "opacity-100" : "opacity-50"
        );
    };

    function togglePeriod() {
        const options = ["Monthly", "Yearly"];
        if (period === options[0]) {
            setPeriod(options[1] as PricingPeriod);
        } else {
            setPeriod(options[0] as PricingPeriod);
        }
    }
    return (
        <div className="flex items-center justify-center gap-3">
            <span className={cns(period === "Monthly")}>
                Monthly
            </span>
            <div
                onClick={togglePeriod}
                className={cn(
                    "flex items-center p-[4px] cursor-pointer",
                    "bg-neutral-300 rounded-full w-13"
                )}
            >
                <div
                    className="w-5 h-5 bg-neutral-900 rounded-full transition-all duration-300"
                    style={{
                        transform:
                            period === "Monthly"
                                ? "translateX(0)"
                                : "translateX(110%)",
                    }}
                />
            </div>
            <span className={cns(period === "Yearly")}>
                Yearly
            </span>
        </div>
    );
}
