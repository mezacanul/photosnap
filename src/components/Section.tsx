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
    height = "md:h-[75vh]",
    direction = "right",
    cols = "1fr 1fr",
}: SectionProps) {
    const cns = cn(
        "md:grid items-center",
        "flex flex-col justify-between",
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
            {/* Background Image */}
            <div
                className={cn(
                    "w-full h-[40vh] md:h-full",
                    direction === "left"
                        ? "order-1 md:order-2"
                        : "order-1 md:order-1"
                )}
                style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />

            {/* Content */}
            <div
                className={cn(
                    "flex justify-center items-center",
                    "h-[55vh]",
                    direction === "left"
                        ? "order-2 md:order-1"
                        : "order-2 md:order-2"
                )}
            >
                <div
                    className={cn(
                        "flex flex-col items-start gap-4 md:gap-8 mt-0 md:-mt-10",
                        "w-[90%] md:w-[80%] lg:w-[65%]"
                    )}
                >
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
