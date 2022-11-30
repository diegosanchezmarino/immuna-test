import { balance, pool, protocol, risk_status, uniswap } from "../../../assets/strings";

import ethUsdcIcon from "../../../assets/eth_usdc_icon.svg";
import daiUsdcIcon from "../../../assets/dai_usdc_icon.svg";
import busdTetherIcon from "../../../assets/busd_tether_icon.svg";
import eth1incheIcon from "../../../assets/eth_1inch_icon.svg";
import daiEthIcon from "../../../assets/dai_eth_icon.svg";

import { LiquidityPool } from "../../../model/LiquidityPool";
import ColumnHeader from "./ColumnHeader/ColumnHeader";
import TableRow from "./TableRow/TableRow";
import { usdcEthPoolAddress, daiUsdcPoolAddress, busdTetherPoolAddress, eth1inchPoolAddress, daiEthPoolAddress } from "../../../Constants"
import { useEffect, useState } from "react";
import { getBalanceForPool } from "../../../api/PoolApi";


const columnsHeaders = [protocol, pool, balance, risk_status]
const defaultPools: LiquidityPool[] = [
    {
        address: usdcEthPoolAddress,
        protocol: uniswap,
        balance: "N / A",
        riskStatus: "Green",
        icon: ethUsdcIcon
    },
    {
        address: daiUsdcPoolAddress,
        protocol: uniswap,
        balance: "N / A",
        riskStatus: "Red",
        icon: daiUsdcIcon
    },
    {
        address: busdTetherPoolAddress,
        protocol: uniswap,
        balance: "N / A",
        riskStatus: "Yellow",
        icon: busdTetherIcon
    },
    {
        address: eth1inchPoolAddress,
        protocol: uniswap,
        balance: "N / A",
        riskStatus: "Green",
        icon: eth1incheIcon
    },
    {
        address: daiEthPoolAddress,
        protocol: uniswap,
        balance: "N / A",
        riskStatus: "Green",
        icon: daiEthIcon
    },

]

export default function MonitorTable(props: { showRiskDetails: (isActive: boolean) => void }) {

    const [pools, setPoolsData] = useState(defaultPools)
    useEffect(() => { getBalances() }, [])

    async function getBalances() {

        console.log("Launching requests")

        const updatedPools: LiquidityPool[] = []

        for (let index = 0; index < pools.length; index++) {
            getBalanceForPool(pools[index]).then(result => {
                const formatedData = JSON.parse(result.data.split("data:")[1].split("event:")[0])

                const walletObject = formatedData.balance.wallet
                const keysArray = Object.keys(walletObject)

                const firstSymbol = formatedData.balance.wallet[keysArray[0]].context.symbol
                const firstBalance = formatedData.balance.wallet[keysArray[0]].context.balance.toFixed(2)

                const secondSymbol = formatedData.balance.wallet[keysArray[1]].context.symbol
                const secondBalance = formatedData.balance.wallet[keysArray[1]].context.balance.toFixed(2)

                pools[index] = { ...pools[index], balance: `${firstBalance} ${firstSymbol} / ${secondBalance} ${secondSymbol}` }

                const updatedPools = [...pools]

                setPoolsData(updatedPools)
            })
        }


    }

    return (
        <div className="z-[1] rounded-[5px] shadow overflow-hidden">
            <div className="flex flex-row items-center justify-between pl-[24px] pr-[24px] pt-[22px] pb-[22px] bg-[#E6F0FF]">
                {columnsHeaders.map((name, key) => { return (<ColumnHeader name={name} key={key} />) })}
            </div>
            <div className="flex flex-col items-center justify-start">
                {pools.map((digitalAsset, key) => { return (<TableRow showRiskDetails={props.showRiskDetails} digitalAsset={digitalAsset} key={key} index={key} />) })}
            </div>
        </div>
    )
}

