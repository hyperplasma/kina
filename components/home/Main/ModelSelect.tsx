import {PiLightningFill, PiSailboatDuotone, PiShootingStarFill} from "react-icons/pi";
import {useAppContext} from "@/components/AppContext";
import {ActionType} from "@/reducers/AppReducer";

export default function ModelSelect() {
    const models = [
        {
            id: "chatgpt-4",
            name: "ChatGPT-4",
            icon: PiLightningFill
        },
        {
            id: "chatglm-4",
            name: "ChatGLM-4",
            icon: PiShootingStarFill
        },
        {
            id: "deepseek-r1",
            name: "DeepSeek-R1",
            icon: PiSailboatDuotone
        }
    ]
    const {
        state: {currentModel},
        dispatch
    } = useAppContext()
    return (
        <div className="flex bg-gray-100 dark:bg-gray-900 p-1 rounded-xl">
            {
                models.map(item => {
                    const selected = item.id === currentModel
                    return (
                        <button
                            key={item.id}
                            onClick={() => {
                                dispatch({
                                    type: ActionType.UPDATE,
                                    field: "currentModel",
                                    value: item.id
                                })
                            }}
                            className={`group hover:text-gray-900 hover:dark:text-gray-100 flex items-center justify-center space-x-2 py-2.5 my-min-w-148px text-sm font-medium border rounded-md ${
                                selected ? "border-gray-200 bg-white text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100"
                                    : "border-transparent text-gray-500"
                            }`}
                        >
                            <span className={`group-hover:my-text-#26cf8e transition-colors duration-100 ${
                                selected ? "my-text-#26cf8e" : ""
                            }`}>
                                <item.icon/>
                            </span>
                            <span className="transition-colors duration-100">
                                {item.name}
                            </span>
                        </button>
                    )
                })
            }
        </div>
    )
}