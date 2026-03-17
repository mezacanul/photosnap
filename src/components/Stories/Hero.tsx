import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import ArrowButton from "../ArrowButton";

export default function Hero() {
    const hero = useSelector(
        (state: RootState) => state.content.stories.hero
    );
    return (
        <div
            className="h-[80vh] w-full px-content flex items-center bg-cover bg-center"
            style={{
                backgroundImage: `url(${hero.image})`,
            }}
        >
            <div className="w-[35%] flex flex-col gap-6 items-start text-white">
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
