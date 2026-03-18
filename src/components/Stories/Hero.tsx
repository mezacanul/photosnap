import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import ArrowButton from "../ArrowButton";
import { cn } from "../../utils/cn";

export default function Hero() {
    const hero = useSelector(
        (state: RootState) => state.content.stories.hero
    );
    return (
        <div
            className={cn(
                "w-full flex items-center bg-cover bg-center",
                "h-[90vh] md:h-[80vh] flex-col md:flex-row"
            )}
            style={{
                backgroundImage: `url(${hero.image})`,
            }}
        >
            <div
                className="block md:hidden w-full h-[40vh] bg-cover bg-center"
                style={{
                    backgroundImage: `url(${hero.image})`,
                }}
            />
            <div
                className={cn(
                    "flex flex-col gap-6 items-start text-white px-content",
                    "w-full md:w-[70%] lg:w-[35%]",
                    "gap-3 md:gap-6",
                    "bg-black md:bg-transparent",
                    "h-[60vh] md:h-full justify-center"
                )}
            >
                <p className="text-5-bold">
                    {hero.subtitle}
                </p>
                <h1 className="text-1 mb-6">
                    {hero.title}
                </h1>
                <p className="text-5-regular text-zinc-400">
                    {`${hero.date} `}
                    <b className="text-white">{`${hero.author}`}</b>
                </p>
                <p className="text-5-regular text-zinc-400">
                    {hero.description}
                </p>
                <ArrowButton
                    type="dark"
                    title={hero.button}
                    className="text-6-regular"
                />
            </div>
        </div>
    );
}
