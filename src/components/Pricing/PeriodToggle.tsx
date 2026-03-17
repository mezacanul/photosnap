import usePricingPeriod from "../../store/ui";
import { cn } from "../../utils/cn";
import type { PricingPeriod } from "../../types";

export default function PeriodToggle() {
  const period = usePricingPeriod(
      (state) => state.period
  );
  const setPeriod = usePricingPeriod(
      (state) => state.setPeriod
  );
  const cns = (isSelected: boolean) => {
      return cn(
          "text-4-bold transition-all duration-300",
          isSelected ? "opacity-100" : "opacity-30"
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
                              : "translateX(120%)",
                  }}
              />
          </div>
          <span className={cns(period === "Yearly")}>
              Yearly
          </span>
      </div>
  );
}
