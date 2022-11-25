import searchIcon from "../../../assets/search_icon.svg"

export default function NavbarSearchBar() {


    return (
        <div className="flex flex-row items-center justify-start border border-[#DFDFDF] rounded-full w-[352px] h-[40px]">
            <img className="ml-[15px] w-[14px] h-[14px]" src={searchIcon} />
            <input className="ml-[12px] text-[14px] font-400 font-[Inter] border-none outline-none" placeholder="Search..." />
        </div>
    )
}