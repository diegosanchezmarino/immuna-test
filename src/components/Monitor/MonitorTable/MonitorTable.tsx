import { balance, pool, protocol, risk_status, uniswap } from "../../../assets/strings";
import { DigitalAsset } from "../../../model/DigitalAsset";
import ColumnHeader from "./ColumnHeader/ColumnHeader";
import TableRow from "./TableRow/TableRow";

const columnsHeaders = [protocol, pool, balance, risk_status]
const digitalAssets: DigitalAsset[] = [
    {
        address: "0xe2DcBcd144771D03f3FfbB9424411E3EC0153885",
        protocol: uniswap,
        balance: "1.104008 WETH / 2,888.28 USDC",
        riskStatus: "Green"
    },
    {
        address: "0xe2DcBcd144771D03f3FfbB9424411E3EC0153885",
        protocol: uniswap,
        balance: "1.104008 WETH / 2,888.28 USDC",
        riskStatus: "Red"
    },
    {
        address: "0xe2DcBcd144771D03f3FfbB9424411E3EC0153885",
        protocol: uniswap,
        balance: "1.104008 WETH / 2,888.28 USDC",
        riskStatus: "Yellow"
    },
    {
        address: "0xe2DcBcd144771D03f3FfbB9424411E3EC0153885",
        protocol: uniswap,
        balance: "1.104008 WETH / 2,888.28 USDC",
        riskStatus: "Green"
    },
    {
        address: "0xe2DcBcd144771D03f3FfbB9424411E3EC0153885",
        protocol: uniswap,
        balance: "1.104008 WETH / 2,888.28 USDC",
        riskStatus: "Green"
    },

]

export default function MonitorTable(props: { showRiskDetails: (isActive: boolean) => void }) {

    return (
        <div className="z-[1] rounded-[5px] shadow overflow-hidden">
            <div className="flex flex-row items-center justify-between pl-[24px] pr-[24px] pt-[22px] pb-[22px] bg-[#E6F0FF]">
                {columnsHeaders.map((name, key) => { return (<ColumnHeader name={name} key={key} />) })}
            </div>
            <div className="flex flex-col items-center justify-start">
                {digitalAssets.map((digitalAsset, key) => { return (<TableRow showRiskDetails={props.showRiskDetails} digitalAsset={digitalAsset} key={key} index={key} />) })}
            </div>
        </div>
    )
}

