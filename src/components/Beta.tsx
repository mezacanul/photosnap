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
                "flex-col md:flex-row gap-10 md:gap-0",
                "text-white"
            )}
        >
            <h1 className="text-2 w-full md:w-[60%] lg:w-[30%]">
                {beta.title}
            </h1>
            <div className="w-full md:w-auto">
                <ArrowButton
                    type="dark"
                    title={beta.button}
                    hover="underline"
                    className="text-6-regular"
                />
            </div>
        </div>
    );
}
