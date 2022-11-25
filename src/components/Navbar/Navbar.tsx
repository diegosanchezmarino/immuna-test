import { dashboard } from "../../assets/strings";
import NavbarSearchBar from "./NavbarSearchBar/NavbarSearchBar";
import UserInformation from "./UserInformation/UserInformation";
import logo from "../../assets/logo.svg"



export default function Navbar(props: { isConnected: boolean; }) {




    return (
        <div className="flex flex-row items-center justify-start bg-white h-[65px] z-[1] shadow-sm">

            {props.isConnected ? <p className="ml-5 text-[18px] font-[500] mr-[54px] font-[Inter]">{dashboard}</p> : null}
            {props.isConnected ? <NavbarSearchBar /> : null}
            {props.isConnected ? null : <img className="w-[112px] h-[26px] ml-[82px]" src={logo}></img>}
            <UserInformation isConnected={props.isConnected}/>
        </div>
    )
}