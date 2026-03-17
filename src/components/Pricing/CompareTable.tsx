import { cn } from "../../utils/cn";
import { IoMdCheckmark } from "react-icons/io";

export default function CompareTable({
    tableData,
}: {
    tableData: any;
}) {
    const cns = {
        tableContainer: "grid",
    };
    const gridCols = `3fr 1fr 1fr 1fr`;
    return (
        <div className="flex flex-col gap-15 w-[80%] mx-auto">
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
                        gridTemplateColumns: gridCols,
                    }}
                >
                    {tableData.thead.map(
                        (item: string, index: number) => (
                            <p
                                key={index}
                                className={cn(
                                    "text-5-bold",
                                    index === 0
                                        ? "text-left ps-4"
                                        : "text-center"
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
                            "py-5 border-b border-neutral-500"
                        )}
                        style={{
                            gridTemplateColumns: gridCols,
                        }}
                    >
                        <p className="text-5-bold ps-4">
                            {item[0]}
                        </p>
                        <div className="flex items-center justify-center">
                            {item[1] ? <Checkmark /> : null}
                        </div>
                        <div className="flex items-center justify-center">
                            {item[2] ? <Checkmark /> : null}
                        </div>
                        <div className="flex items-center justify-center">
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
