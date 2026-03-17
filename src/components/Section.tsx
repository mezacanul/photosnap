import { cn } from "../utils/cn";
import ArrowButton from "./ArrowButton";

interface SectionProps {
    title: string;
    description: string;
    button?: string;
    image: string;
    type?: "light" | "dark";
    height?: string;
    direction?: "left" | "right";
    cols?: string;
}
function Section({
    title,
    description,
    button = "",
    image,
    type = "dark",
    height = "h-[70vh]",
    direction = "right",
    cols = "1fr 1fr",
}: SectionProps) {
    const cns = cn(
        "grid items-center",
        type === "light"
            ? "bg-white text-neutral-900"
            : "bg-neutral-900 text-white",
        height
    );
    return (
        <div
            className={cns}
            style={{ gridTemplateColumns: cols }}
        >
            <div
                className={cn(
                    "w-full h-full",
                    direction === "left"
                        ? "order-2"
                        : "order-1"
                )}
                style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />
            <div
                className={cn(
                    "flex justify-center items-center",
                    direction === "left"
                        ? "order-1"
                        : "order-2"
                )}
            >
                <div className="flex flex-col items-start gap-8 w-[65%] -mt-10">
                    <h2 className="text-1">{title}</h2>
                    <p className="text-5-regular">
                        {description}
                    </p>
                    {button && (
                        <ArrowButton
                            type={type}
                            title={button}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Section;
