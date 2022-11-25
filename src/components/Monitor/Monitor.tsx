import { eth, immuna_monitor_portal } from "../../assets/strings";
import MonitorSearchBar from "./MonitorSeachBar/MonitorSearchBar";
import MonitorTable from "./MonitorTable/MonitorTable";
import ethIcon from "../../assets/eth_icon.svg"
import copyIcon from "../../assets/copy_icon.svg"


export default function Monitor() {



    return (
        <div className="flex flex-col flex-[1] pr-[20px] pl-[20px] z-[0] bg-[#F8F8F8]">
            <div className="flex flex-row h-[76px] items-center justify-start ">
                <p className="text-[18px] font-[500] font-[Inter] text-[#2C2C2C]">{immuna_monitor_portal}</p>
                <div className="flex flex-row items-center justify-between ml-auto w-[670px] h-[100%] ">
                    <MonitorSearchBar />
                    <div className="flex flex-row items-center justify-between h-[44px] w-[237px] rounded-[22px] bg-[#E0EEFF]">
                        <div className="flex flex-row ml-[24px] w-[48px] h-[17px] items-center justify-between">
                            <img className="w-[100%] h-[100%]" src={ethIcon} />
                            <p className="text-[#6C6C6C] text-[14px] font-[400] font-[Inter] ">{eth}</p>
                        </div>
                        <div className="flex flex-row items-center justify-center rounded-[22px] bg-[#CBE1FF] ml-[14px] h-[100%] w-[150px]">
                            <p className="text-[#383838] text-[14px] font-[400] font-[Inter]">{"0xBAD7...E116"}</p>
                        </div>
                    </div>
                    <button className="flex flex-col items-center justify-center w-[44px] h-[44px] rounded-full bg-[#CBE1FF] border-none">
                        <img src={copyIcon}/>
                    </button>
                </div>
            </div>
            <MonitorTable />
        </div>
    )
}