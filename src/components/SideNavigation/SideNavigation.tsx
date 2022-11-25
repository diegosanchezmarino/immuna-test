import NavigationButton from "./NavigationButton/NavigationButton";
import { dashboard, alerts, defend, protect } from "../../assets/strings"

import dashboardIcon from "../../assets/dashboard_icon.svg"
import alertsIcon from "../../assets/alerts_icon.svg"
import defendIcon from "../../assets/defend_icon.svg"
import protectIcon from "../../assets/protect_icon.svg"
import logo from "../../assets/logo.svg"

import { NavigationButtonData } from "./NavigationButton/NavigationButton";


const navigationOptions: NavigationButtonData[] = [
    { text: dashboard, icon: dashboardIcon, isActive: true },
    { text: alerts, icon: alertsIcon, isActive: false },
    { text: defend, icon: defendIcon, isActive: false },
    { text: protect, icon: protectIcon, isActive: false },
]

export default function SideNavigation() {

    return (
        <div className="flex flex-col bg-white w-[270px] items-center justify-start z-[1] shadow-sm">

            <img className="mt-6 h-[30px] w-[130px]" src={logo} />

            <div className="flex flex-col h-[228px] items-center justify-between mt-16">
                {navigationOptions.map((data, key) => { return (<NavigationButton data={data} key={key} />) })}
            </div>


        </div>
    )
}