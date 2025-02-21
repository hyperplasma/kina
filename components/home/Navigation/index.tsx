import Menubar from "@/components/home/Navigation/Menubar";
import {useAppContext} from "@/components/AppContext";
import Toolbar from "@/components/home/Navigation/Toolbar";
import ChatList from "@/components/home/Navigation/ChatList";

export default function Navigation() {
    const {
        state: {displayNavigation}
    } = useAppContext()
    return (
        <nav className={
            `${displayNavigation ? "" : "hidden"
            } flex flex-col dark relative h-full my-nav-bar-w-260px bg-gray-900 text-gray-300 p-2`}
        >
            <Menubar/>
            <ChatList/>
            <Toolbar/>
        </nav>
    )
}