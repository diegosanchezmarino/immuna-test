import Monitor from "../components/Monitor/Monitor";
import Navbar from "../components/Navbar/Navbar";
import SideNavigation from "../components/SideNavigation/SideNavigation";

export default function MainView() {




    return (
        <div className="flex flex-row flex-[1] h-[100%]">
            <SideNavigation />
            <div className="flex flex-col flex-[1]">
                <Navbar isConnected={true} />
                <Monitor />
            </div>

        </div>
    )
}