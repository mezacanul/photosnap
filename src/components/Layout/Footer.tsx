import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import type { RootState } from "../../store";
import { cn } from "../../utils/cn";
import ArrowButton from "../ArrowButton";
import { useResponsive } from "../../hooks/useResponsive";
import type { NavItem } from "../../types";

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
            className={cn(
                "bg-neutral-900 text-white px-container",
                "flex justify-between lg:grid items-center",
                "flex-col md:flex-row md:h-[28vh] py-13 md:py-16 lg:py-13 gap-12 md:gap-0"
            )}
            style={{ gridTemplateColumns: "1fr 2fr 1fr" }}
        >
            {/* Logo & Socials */}
            <div
                className={cn(
                    "flex flex-col items-center justify-between",
                    "md:items-start md:h-full gap-8 md:gap-0"
                )}
            >
                <div className="md:flex md:flex-col md:gap-6">
                    <Link to="/">
                        <img
                            src={logo.light}
                            className="w-[12rem]"
                            alt="Logo"
                        />
                    </Link>
                    {useResponsive([
                        null,
                        <MobileNav items={items} />,
                        null,
                    ])}
                </div>
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
            {useResponsive([
                <MobileNav items={items} />,
                null,
                <MobileNav items={items} />,
            ])}

            {/* Button & Copyright */}
            <div
                className={cn(
                    "flex flex-col justify-between items-end",
                    "md:h-full gap-5 md:gap-0 mt-10 md:mt-0"
                )}
            >
                <ArrowButton
                    type="dark"
                    title={button}
                    hover="underline"
                    className="text-6-regular"
                />
                <p className="text-zinc-500 text-6-regular text-right">
                    {copyright}
                </p>
            </div>
        </div>
    );
}

function MobileNav({ items }: { items: NavItem[] }) {
    return (
        <div className="flex flex-col md:flex-row items-center md:items-start lg:flex-col gap-5">
            {items.map((item: NavItem) => (
                <a
                    className="text-6-regular"
                    href={item.href}
                    key={item.title}
                >
                    {item.title}
                </a>
            ))}
        </div>
    );
}
