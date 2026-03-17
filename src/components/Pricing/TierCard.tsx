import usePricingPeriod from "../../store/ui";
import type { TierProps } from "../../types";
import { cn } from "../../utils/cn";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import Button from "../Button";

export default function TierCard({
    item,
}: {
    item: TierProps;
}) {
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
