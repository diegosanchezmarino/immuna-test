import orderArrowIcon from "../../../../assets/order_arrow_icon.svg"




export default function ColumnHeader(props: { name: string; }) {

    return (
        <div className="flex flex-row items-center justify-start flex-[1]">
            <p className="text-[14px] font-[400]">{props.name}</p>
            <img className="w-[10xp] h-[10px] ml-[10px]" src={orderArrowIcon} />
        </div>
    )
}