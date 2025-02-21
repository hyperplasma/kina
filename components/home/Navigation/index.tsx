import Menubar from "@/components/home/Navigation/Menubar";
import {useAppContext} from "@/components/AppContext";
import Toolbar from "@/components/home/Navigation/Toolbar";

export default function Navigation() {
    const {
        state: {displayNavigation}
    } = useAppContext()
    return (
        <nav className={`${displayNavigation ? "" : "hidden"} dark relative h-full my-nav-bar bg-gray-900 text-gray-300 p-2`}
        >
            <Menubar/>
            <Toolbar/>
        </nav>
    )
}