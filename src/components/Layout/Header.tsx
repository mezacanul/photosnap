import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import { cn } from "../../utils/cn";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import type { NavItem } from "../../types";

export default function Header() {
    const header = useSelector(
        (state: RootState) => state.content.header
    );
    const logo = useSelector(
        (state: RootState) => state.content.images.logo
    );

    return (
        <div
            className={cn(
                "items-center px-container h-[5rem]",
                "flex justify-between",
                "md:grid md:grid-cols-3"
            )}
        >
            <Link to="/">
                <img
                    src={logo.dark}
                    className="w-[10rem] md:w-[12rem]"
                    alt="Logo"
                />
            </Link>

            <div className="hidden md:flex justify-around">
                {header.items.map((item: NavItem) => (
                    <Link
                        to={item.href}
                        key={item.title}
                        className="hover:font-bold transition-all duration-300"
                    >
                        {item.title}
                    </Link>
                ))}
            </div>

            <div className="hidden md:flex justify-end">
                <button
                    className={cn(
                        "bg-neutral-900 text-white px-10 py-2",
                        "transition-all duration-300",
                        "cursor-pointer hover:bg-zinc-50 hover:border-zinc-800 border-2 border-transparent hover:text-neutral-900"
                    )}
                >
                    {header.button}
                </button>
            </div>

            <MobileNav
                items={header.items}
                button={header.button}
            />
        </div>
    );
}

function MobileNav({
    items,
    button,
}: {
    items: NavItem[];
    button: string;
}) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="block md:hidden">
            <div onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? (
                    <IoMdClose size={26} />
                ) : (
                    <GiHamburgerMenu size={26} />
                )}
            </div>

            {isOpen && (
                <div className="fixed left-0 top-[9vh] bg-black/50 h-screen w-full">
                    <style>{`html {
                            overflow-y: hidden;
                        }`}</style>
                    <div className="bg-white flex flex-col items-center justify-center gap-4 py-6 px-8">
                        {items.map((item: NavItem) => (
                            <Link
                                to={item.href}
                                key={item.title}
                                onClick={() =>
                                    setIsOpen(false)
                                }
                            >
                                {item.title}
                            </Link>
                        ))}

                        <div className="pt-6 w-full border-t border-neutral-400/50">
                            <button className="w-full py-4 text-white bg-black">
                                {button}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
