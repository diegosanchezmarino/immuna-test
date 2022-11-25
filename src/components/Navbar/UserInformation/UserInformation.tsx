import userPicture from "../../../assets/user_picture.svg"
import newNotifications from "../../../assets/new_notifications_icon.svg"
import dropDownArrow from "../../../assets/dropdown_arrow_icon.svg"

export default function UserInformation(props: { isConnected: boolean; }) {

    return (
        <div className="flex flex-row ml-auto mr-[30px] justify-self-end items-center justify-start ">

            {props.isConnected ? <img className="w-4 h-4" src={newNotifications} /> : null}
            {props.isConnected ? <img className="w-8 h-8 ml-[20px]" src={userPicture} /> : <div className="w-8 h-8 ml-[20px] rounded-full bg-[#D1D1D1]" />}
            {props.isConnected ? <p className="ml-[8px] font-[400] font-[Inter] text-[16px] text-[#2C2C2C]">Betty Cooper</p> : <p className="ml-[8px] font-[400] font-[Inter] text-[16px] text-[#3D3D3D]">N/A</p>}
            <img className="ml-[11px]" src={dropDownArrow} />
        </div>
    )
}