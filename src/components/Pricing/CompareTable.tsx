import { cn } from "../../utils/cn";
import { IoMdCheckmark } from "react-icons/io";
import { useResponsive } from "../../hooks/useResponsive";

export default function CompareTable({
    tableData,
}: {
    tableData: any;
}) {
    const checkPropLabels = ["BASIC", "PRO", "BUSINESS"];
    const cns = {
        tableContainer: "grid",
        checkBox: {
            container: cn(
                "flex flex-col md:flex-row gap-3 md:gap-0",
                "items-center justify-start md:justify-center py-6 md:py-0"
            ),
            label: "opacity-50 block md:hidden",
        },
    };
    const gridCols = `3fr 1fr 1fr 1fr`;
    return (
        <div className="flex flex-col gap-15 w-full lg:w-[80%] mx-auto">
            <h2 className="text-2 text-center">
                {tableData.title}
            </h2>

            <div className="flex flex-col">
                <div
                    className={cn(
                        cns.tableContainer,
                        "pb-6 border-b-2 border-neutral-800"
                    )}
                    style={{
                        gridTemplateColumns: useResponsive([
                            "1fr",
                            gridCols,
                            gridCols,
                        ]),
                    }}
                >
                    {tableData.thead.map(
                        (item: string, index: number) => (
                            <p
                                key={index}
                                className={cn(
                                    "text-5-bold",
                                    index === 0
                                        ? "text-left ps-4 text-center md:text-left"
                                        : "text-center hidden md:block"
                                )}
                            >
                                {item}
                            </p>
                        )
                    )}
                </div>

                {tableData.tbody.map((item: any) => (
                    <div
                        key={item[0]}
                        className={cn(
                            cns.tableContainer,
                            "pt-5 pb-0 md:pb-5 border-b border-neutral-500"
                        )}
                        style={{
                            gridTemplateColumns:
                                // gridCols
                                useResponsive([
                                    "1fr 1fr 1fr",
                                    gridCols,
                                    gridCols,
                                ]),
                        }}
                    >
                        <p className="text-5-bold ps-4 col-span-3 md:col-span-1 text-center md:text-left">
                            {item[0]}
                        </p>
                        <div
                            className={
                                cns.checkBox.container
                            }
                        >
                            <span
                                className={
                                    cns.checkBox.label
                                }
                            >
                                {checkPropLabels[0]}
                            </span>
                            {item[1] ? <Checkmark /> : null}
                        </div>
                        <div
                            className={
                                cns.checkBox.container
                            }
                        >
                            <span
                                className={
                                    cns.checkBox.label
                                }
                            >
                                {checkPropLabels[1]}
                            </span>
                            {item[2] ? <Checkmark /> : null}
                        </div>
                        <div
                            className={
                                cns.checkBox.container
                            }
                        >
                            <span
                                className={
                                    cns.checkBox.label
                                }
                            >
                                {checkPropLabels[2]}
                            </span>
                            {item[3] ? <Checkmark /> : null}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function Checkmark() {
    return <IoMdCheckmark size={25} />;
}
