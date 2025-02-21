"use client"
import {LuPanelLeft} from "react-icons/lu";
import Button from "@/components/common/Button";
import {useAppContext} from "@/components/AppContext";
import {ActionType} from "@/reducers/AppReducer";

export default function Menu() {
    const {
        state: {displayNavigation},
        dispatch
    } = useAppContext()
    return (
        <Button
            icon={LuPanelLeft}
            className={`${displayNavigation ? "hidden" : ""} fixed left-2 top-2`}
            variant="outline"
            onClick={() => {
                dispatch({
                    type: ActionType.UPDATE,
                    field: "displayNavigation",
                    value: true
                })
            }}
        />
    )
}