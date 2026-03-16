import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import type { FeatureProps } from "../../types";

export default function FeatureItem({
    image,
    title,
    description,
}: FeatureProps) {
    const { imageFolder } = useSelector(
        (state: RootState) => state.content.features
    );
    return (
        <div className="flex flex-col items-center justify-center gap-6">
            <div className="w-[5rem] h-[5rem] flex items-center justify-center mb-5">
                <img
                    className="w-full object-cover"
                    src={`${imageFolder}${image}`}
                    alt={title}
                />
            </div>
            <h1 className="text-center text-4">{title}</h1>
            <p className="text-center text-5-regular">
                {description}
            </p>
        </div>
    );
}
