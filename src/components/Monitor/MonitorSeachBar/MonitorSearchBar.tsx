import searchIcon from "../../../assets/search_icon.svg"

export default function MonitorSearchBar() {


    return (
        <div className="flex flex-row items-center justify-start border border-[#DFDFDF] rounded-full w-[341px] h-[44px] bg-white">
            <img className="ml-[15px] w-[14px] h-[14px]" src={searchIcon}/>
            <input className="ml-[12px] text-[14px] font-[Inter] font-[400] border-none outline-none bg-white" placeholder="Search"/>
        </div>
    )
}