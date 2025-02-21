import Button from "@/components/common/Button";
import {useAppContext} from "@/components/AppContext";
import {MdDarkMode, MdHome, MdInfo, MdLightMode, MdLink} from "react-icons/md";
import {ActionType} from "@/reducers/AppReducer";

export default function Toolbar() {
    const {
        state: {themeMode},
        dispatch
    } = useAppContext()
    return (
        <div className="absolute bottom-0 left-0 right-0 bg-gray-800 flex p-2 justify-between">
            <Button
                icon={themeMode === "dark" ? MdDarkMode : MdLightMode}
                variant="outline"
                onClick={() => {
                    dispatch({
                        type: ActionType.UPDATE,
                        field: "themeMode",
                        value: themeMode === "dark" ? "light" : "dark"
                    })
                }}
                title="Return to Hyperplasma"
            />
            <Button
                icon={MdHome}
                variant="outline"
                onClick={() => {
                    window.open("https://www.hyperplasma.top/hyplus", "_blank")
                }}
            />
            <Button
                icon={MdInfo}
                variant="outline"
            />
        </div>
    )
}