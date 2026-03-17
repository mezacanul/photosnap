import { useSelector } from "react-redux";
import type { RootState } from "../store";
import { cn } from "../utils/cn";
import ArrowButton from "./ArrowButton";

export default function Beta() {
    const beta = useSelector(
        (state: RootState) => state.content.beta
    );
    return (
        <div
            style={{
                backgroundImage: `url(${beta.image})`,
            }}
            className={cn(
                "bg-cover bg-center",
                "py-[4rem] px-container flex justify-between items-center",
                "text-white"
            )}
        >
            <h1 className="text-2 max-w-[30%]">
                {beta.title}
            </h1>
            <ArrowButton
                type="dark"
                title={beta.button}
                hover="underline"
                className="text-6-regular"
            />
        </div>
    );
}
