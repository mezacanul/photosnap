import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import { cn } from "../../utils/cn";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

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
                {header.items.map(
                    (item: {
                        title: string;
                        href: string;
                    }) => (
                        <Link
                            to={item.href}
                            key={item.title}
                            className="hover:font-bold transition-all duration-300"
                        >
                            {item.title}
                        </Link>
                    )
                )}
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
            
            <MobileNav />
        </div>
    );
}

function MobileNav() {
    return (
        <div className="block md:hidden">
            <GiHamburgerMenu size={26} />
        </div>
    );
}
