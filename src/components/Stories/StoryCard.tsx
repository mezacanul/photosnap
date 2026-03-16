import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import { cn } from "../../utils/cn";
import type { StoryProps } from "../../types";

export default function StoryCard({
    image,
    title,
    author,
}: StoryProps) {
    const { arrow } = useSelector(
        (state: RootState) => state.content.images
    );
    const { authorPrefix, imageFolder, button } =
        useSelector(
            (state: RootState) =>
                state.content.stories.common
        );
    return (
        <div
            className={cn(
                "flex flex-col justify-end",
                "relative bg-cover bg-center w-full text-white h-[30rem]"
            )}
            style={{
                backgroundImage: `url(${imageFolder}${image})`,
            }}
        >
            <div className="gradient-fade" />
            <div className="z-10 px-10 py-10">
                <div className="flex flex-col gap-1.5 pb-5 mb-5 border-b border-white/50">
                    <h1>{title}</h1>
                    <p className="text-6-regular">{`${authorPrefix} ${author}`}</p>
                </div>
                <button
                    className={cn(
                        "flex items-center justify-between w-full cursor-pointer"
                    )}
                >
                    <span className="text-6-regular">
                        {button}
                    </span>
                    <img
                        src={arrow}
                        alt="arrow"
                        className="w-[3rem] filter brightness-0 invert"
                    />
                </button>
            </div>
        </div>
    );
}
