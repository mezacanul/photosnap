import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import ArrowButton from "../ArrowButton";

export default function Footer() {
    const { logo } = useSelector(
        (state: RootState) => state.content.images
    );
    const { items, button, copyright, social } =
        useSelector(
            (state: RootState) => state.content.footer
        );
    return (
        <div
            className="grid items-center bg-neutral-900 text-white px-container py-13"
            style={{ gridTemplateColumns: "1fr 2fr 1fr" }}
        >
            {/* Logo & Socials */}
            <div className="flex flex-col justify-between h-full">
                <img
                    src={logo.light}
                    className="w-[12rem]"
                    alt="Logo"
                />
                <div className="flex gap-4">
                    {social.icons.map((icon: string) => (
                        <img
                            key={icon}
                            src={`${social.prefix}${icon}`}
                            className="filter brightness-0 invert w-[1.1rem]"
                            alt="Social Icon"
                        />
                    ))}
                </div>
            </div>

            {/* Links */}
            <div className="flex flex-col gap-5">
                {items.map(
                    (item: {
                        title: string;
                        href: string;
                    }) => (
                        <a
                            className="text-6-regular"
                            href={item.href}
                            key={item.title}
                        >
                            {item.title}
                        </a>
                    )
                )}
            </div>

            {/* Button & Copyright */}
            <div className="flex flex-col justify-between h-full items-end">
                <ArrowButton
                    type="dark"
                    title={button}
                    hoverType="margin"
                    className="text-6-regular"
                />
                <p className="text-zinc-500 text-6-regular">{copyright}</p>
            </div>
        </div>
    );
}
