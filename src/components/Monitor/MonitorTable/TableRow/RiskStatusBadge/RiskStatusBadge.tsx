import { green, red, yellow } from "../../../../../assets/strings";
import { RiskStatus } from "../../../../../model/LiquidityPool";

export default function RiskStatusBadge(props: { riskStatus: RiskStatus, badgeClicked?: (() => void) }) {




    switch (props.riskStatus) {
        case "Green":
            return (
                <div
                    onClick={() => { if (props.badgeClicked) props.badgeClicked() }}
                    className="flex flex-row rounded-full w-[100px] h-[36px] items-center justify-center text-16px font-[500] text-[#18A002] bg-[#28CA0D] bg-opacity-[0.15]">
                    {green}
                </div>
            )
        case "Red":
            return (
                <div
                    onClick={() => { if (props.badgeClicked) props.badgeClicked() }}
                    className="flex flex-row rounded-full w-[100px] h-[36px] items-center justify-center text-16px font-[500] text-[#C92A2A] bg-[#CA0D0D] bg-opacity-[0.20]">
                    {red}
                </div>
            )
        case "Yellow":
            return (
                <div
                    onClick={() => { if (props.badgeClicked) props.badgeClicked() }}
                    className="flex flex-row rounded-full w-[100px] h-[36px] items-center justify-center text-16px font-[500] text-[#C7B40E] bg-[#F8FFA8] bg-opacity-[0.50]">
                    {yellow}
                </div>
            )

        default:
            return (
                <div
                    onClick={() => { if (props.badgeClicked) props.badgeClicked() }}
                    className="flex flex-row rounded-full w-[100px] h-[36px] items-center justify-center text-16px font-[500] text-[#18A002] bg-[#28CA0D] bg-opacity-[0.15]">
                    {green}
                </div>
            )
    }

}