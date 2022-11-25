import RiskStatusBadge from "../MonitorTable/TableRow/RiskStatusBadge/RiskStatusBadge"
import closeIcon from "../../../assets/close_icon.svg"



export default function RiskModal(props: { showRiskDetails: (isActive: boolean) => void }) {


    function closeModal() {
        props.showRiskDetails(false)
    }
    return (
        <div className="flex flex-col w-[1000px] absolute bg-white pt-[16px] pb-[36px] rounded-[8px]">
            <div className="flex flex-row items-center justify-between border-b border-[#C2C2C2] pl-[32px] pr-[20px] pb-[18px]">
                <p className="text-[16px] text-[#242424] font-[400] font-[Inter]">Status</p>
                <button
                    onClick={() => { closeModal() }}
                    className="w-[24px] h-[24px]" >
                    <img src={closeIcon} />
                </button>
            </div>
            <div className="flex flex-row items-center justify-start pl-[39px] pt-[20px]" >
                <p className="mr-[20px] text-[18px] leading-[22px] text-[#272727] font-[400] font-[Inter]">Risk Status</p>
                <RiskStatusBadge riskStatus="Red" />
            </div>
            <div className="flex flex-col rounded-[8px] pl-[16px] mt-[20px] ml-[39px] mr-[39px] pt-[16px] pb-[46px] pr-[36px] bg-[#F5F5F5]">
                <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-col">
                        <p className="text-[#5C5C5C] text-[14px] font-[400] font-[Inter]" >Trigger:</p>
                        <p className="text-[#2F2F2F] text-[14px] font-[400] font-[Inter] mt-[10px]">The asset's risk profile has changed significantly.</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-[#5C5C5C] text-[14px] font-[400] font-[Inter]">Event Summary</p>
                        <p className="text-[#2F2F2F] text-[14px] font-[400] font-[Inter] mt-[10px]">A significant amount of Compound were transferred.</p>
                    </div>
                </div>
                <p className="text-[#5C5C5C] text-[14px] font-[400] font-[Inter] mt-[46px]">Details</p>
                <p className="text-[#2F2F2F] text-[14px] font-[400] font-[Inter] leading-[17px] mt-[10px]">[Token % out of the entire circulation] 0.58% were transferred.
                    A significant movement is detected when there are more than 1% of the tokens in circulation that were moved in a single transaction.
                    Such a significant movement
                    usually triggers movements in the asset's price and therefor should be monitored closely.</p>
            </div>
            <button
                onClick={() => { closeModal() }}
                className="bg-[#1D7DEA] rounded-[46px] text-[16px] text-[#FFFFFF] font-[500] font-[Inter] mt-[24px] w-[221px] h-[48px] self-center">Continue</button>
        </div>
    )
}