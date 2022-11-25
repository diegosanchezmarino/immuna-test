import Navbar from "../components/Navbar/Navbar";
import bitcoinPicture from "../assets/bitcoin_picture.svg"
import { connect_to_wallet, connect_your_wallet, ethereum, placeholder_wallet_input, welcome_to_immuna } from "../assets/strings";
import ethereumIcon from "../assets/eth_icon.svg"
import { Link } from "react-router-dom";



export default function LoginView() {

    function connectWalletPressed() {

    }

    return (
        <div className="flex flex-col flex-[1] h-[100%] bg-[#F7FBFF]">
            <Navbar isConnected={false} />
            <div className="flex flex-row items-center justify-start flex-[1]">
                <img className="h-[calc(100vh_-_65px)] z-[1]" src={bitcoinPicture} />
                <div className="flex flex-col relative items-center z-[0] h-[calc(100vh_-_65px)] flex-[1]">
                    <div className="flex flex-col items-center justify-start h-[calc(100vh_-_65px)] w-[100%] absolute">
                        <div className="flex flex-col items-end justify-center rounded-l-full w-[250px] h-[500px] self-end bg-gradient-to-r from-white to-[#597dd12f]" >
                            <div className="rounded-l-full w-[200px] h-[400px] bg-[#F7FBFF]" />
                        </div>
                        <div className="rounded-full w-[193px] h-[193px] bg-[#FFFAEB] mt-[150px] mr-[550px]" />
                    </div>
                    <div className="flex flex-col items-center justify-start w-[599px] h-[654px] rounded-[8px] bg-white shadow z-[1] mt-[102px]">
                        <p className="text-[#3D3D3D] text-[30px] font-[500] font-[Inter] mt-[60px]" >{welcome_to_immuna}</p>
                        <p className="text-[#2C2C2C] text-[20px] font-[400] font-[Inter] opacity-[0.9] mt-[12px] leading-[24px]" >{connect_your_wallet}</p>
                        <div className="flex flex-row mt-[88px] self-start ml-[45px]">
                            <img src={ethereumIcon}></img>
                            <p className="ml-[9px]">{ethereum}</p>
                        </div>
                        <div className="flex flex-row items-center justify-start w-[509px] h-[65px] mt-[20px] bg-[#EFEFEF] rounded-[46px]" >
                            <input className="outline-none border-none bg-transparent ml-[29px] placeholder:text-[#999999] placeholder:text-[14px] placeholder:font-[400]" placeholder={placeholder_wallet_input}></input>
                        </div>
                        <Link to={"/main"} className="w-[509px] h-[65px] flex flex-col items-center justify-center rounded-[46px] bg-[#1D7DEA] text-[#F4F4F4] mt-[54px]">
                            {connect_to_wallet}
                        </Link >
                    </div>
                </div>
            </div>
        </div >
    )
}
