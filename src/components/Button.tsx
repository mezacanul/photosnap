import { cn } from "../utils/cn";

export default function Button({
    text,
    type,
}: {
    text: string;
    type: "light" | "dark";
}) {
    const cns = {
        button: cn(
            "w-full py-3 text-5-regular cursor-pointer",
            type === "light"
                ? "bg-white text-black"
                : "bg-black text-white",
            "transition-all duration-300",
            "hover:scale-107"
        ),
    };
    return <button className={cns.button}>{text}</button>;
}
