export interface NavigationButtonData {
    text: string,
    icon: string
    isActive: boolean
}

export default function NavigationButton(props: { data: NavigationButtonData; }) {


    const backgroundColor = props.data.isActive ? "bg-[#1D7DEA]" : "bg-[#FFFFFF]"
    const textColor = props.data.isActive ? "text-[#FFFFFF]" : "text-[#4D4D4D]"

    return (
        <button className={"flex flex-row rounded-xl items-center justify-start w-[194px] h-[48px] hover:cursor-pointer " + backgroundColor} >
            <img className="ml-[10%] w-[15px] h-[15px]" src={props.data.icon} />
            <p className={"text-sm ml-[10%] font-[500] text-[16px] font-[Inter] " + textColor}>{props.data.text}</p>
        </button>
    )
}