import { LiquidityPool } from "../../../../model/LiquidityPool";
import RiskStatusBadge from "./RiskStatusBadge/RiskStatusBadge";
import openLinkIcon from "../../../../assets/open_link_icon.svg"


export default function TableRow(props: { digitalAsset: LiquidityPool, index: number, showRiskDetails: (isActive: boolean) => void }) {



    

    const backgroundColor = props.index % 2 === 0 ? "bg-[#FFFFFF]" : "bg-[#F4F9FF]"

    function riskDetailSelected() {
        if (props.digitalAsset.riskStatus === "Red") {
            props.showRiskDetails(true)
        }
    }
    return (
        <div
            className={"flex flex-row w-[100%] h-[65px] items-center justify-start pl-[24px] pr-[24px] " + backgroundColor}>
            <div className="flex flex-row flex-[1] items-center justify-start">
                <p className="text-[14px] font-[400] font-[Inter]">{props.digitalAsset.protocol}</p>
                <img className="w-[19px] h-[15px] ml-[18px]" src={openLinkIcon} />
            </div>
            <div className="flex flex-row flex-[1] items-center justify-start">
                <img className="h-[29px] w-[43px]" src={props.digitalAsset.icon} />
                <p className="ml-[19px] text-[16px] font-[400] font-[Inter]">{props.digitalAsset.address.substring(0, 6) + "..." + props.digitalAsset.address.substring(props.digitalAsset.address.length - 5, props.digitalAsset.address.length - 1)}</p>
                <img className="ml-[19px] w-[19px] h-[15px]" src={openLinkIcon} />
            </div>
            <div className="flex flex-row flex-[1] items-center justify-start">
                <p className="text-[14px] font-[400] font-[Inter]">{props.digitalAsset.balance}</p>
            </div>
            <div className="flex flex-row flex-[1] items-center justify-start">
                <RiskStatusBadge riskStatus={props.digitalAsset.riskStatus} badgeClicked={riskDetailSelected} />
            </div>
        </div>
    )
}