import type { RootState } from "../store";
import { cn } from "../utils/cn";
import { useSelector } from "react-redux";

interface ArrowButtonProps {
    type: "dark" | "light";
    title: string;
    className?: string;
    hover?: "gap" | "underline";
}
export default function ArrowButton({
    type,
    title,
    className,
    hover = "gap",
}: ArrowButtonProps) {
    const { arrow } = useSelector(
        (state: RootState) => state.content.images
    );
    return (
        <button
            className={cn(
                "flex items-center gap-4 cursor-pointer",
                className,
                type === "dark"
                    ? "text-white"
                    : "text-black",
                "transition-all duration-300",
                hover === "gap"
                    ? "hover:gap-13"
                    : "border-b-2 border-transparent pb-1 hover:border-white"
            )}
        >
            {title}
            <img
                alt="Arrow"
                src={arrow}
                className={cn(
                    "w-[3.5rem]",
                    type === "dark"
                        ? "filter brightness-0 invert"
                        : ""
                )}
            />
        </button>
    );
}
