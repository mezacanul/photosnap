import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import { cn } from "../../utils/cn";

export default function Header() {
    const header = useSelector(
        (state: RootState) => state.content.header
    );
    const logo = useSelector(
        (state: RootState) => state.content.images.logo
    );

    return (
        <div className="grid grid-cols-3 items-center px-container h-[5rem]">
            <img
                src={logo.dark}
                className="w-[12rem]"
                alt="Logo"
            />

            <div className="flex justify-around">
                {header.items.map(
                    (item: {
                        title: string;
                        href: string;
                    }) => (
                        <a
                            href={item.href}
                            key={item.title}
                            className="hover:font-bold transition-all duration-300"
                        >
                            {item.title}
                        </a>
                    )
                )}
            </div>

            <div className="flex justify-end">
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
        </div>
    );
}
