import { create } from "zustand";
import type { PricingPeriod } from "../types";

const usePricingPeriod = create<{
    period: PricingPeriod;
    setPeriod: (period: PricingPeriod) => void;
}>((set) => ({
    period: "Monthly",
    setPeriod: (period) => set({ period }),
}));

export default usePricingPeriod;
