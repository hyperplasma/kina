import {Chat} from "@/types/chat";
import {PiChatBold, PiTrashBold} from "react-icons/pi";
import {AiOutlineEdit} from "react-icons/ai";
import {MdCheck, MdClose, MdDeleteOutline} from "react-icons/md";
import {useEffect, useState} from "react";

type Props = {
    item: Chat
    selected: boolean
    onSelected: (chat: Chat) => void
}

export default function ChatItem({item, selected, onSelected}: Props) {
    const [editing, setEditing] = useState(false)
    const [deleting, setDeleting] = useState(false)

    useEffect(() => {
        setEditing(false)
        setDeleting(false)
    }, [selected])

    return (
        <li
            onClick={() => {
                onSelected(item)
            }}
            key={item.id}
            className={`relative group flex items-center p-2 space-x-3 cursor-pointer rounded-md hover:bg-gray-800 ${
                selected ? "bg-gray-800 my-pr-3dot5em" : ""
            }`}
        >
            <div>
                {deleting ? <PiTrashBold/> : <PiChatBold/>}
            </div>
            {editing ? (
                <input
                    className="flex-1 min-w-0 bg-transparent outline-none"
                    defaultValue={item.title}
                />
            ) : (
                <div className="relative flex-1 whitespace-nowrap overflow-hidden">
                    {item.title}
                    <span
                        className={`group-hover:from-gray-800 absolute right-0 inset-y-0 w-8 from-gray-800 bg-gradient-to-l ${
                            selected ? "from-gray-800" : "from-gray-900"
                        }`}>
                </span>
                </div>
            )}

            {selected && (
                <div className="absolute right-1 flex">
                    {
                        editing || deleting ? (
                            <>
                                <button
                                    onClick={(e) => {
                                        if (deleting) {
                                            alert("Deleted!")
                                        } else {
                                            alert("Edited!")
                                        }
                                        setDeleting(false)
                                        setEditing(false)
                                        e.stopPropagation()
                                    }}
                                    className="p-1 hover:text-white"
                                >
                                    <MdCheck/>
                                </button>
                                <button
                                    onClick={(e) => {
                                        setDeleting(false)
                                        setEditing(false)
                                        e.stopPropagation()
                                    }}
                                    className="p-1 hover:text-white"
                                >
                                    <MdClose/>
                                </button>
                            </>
                        ) : (
                            <>
                                <button
                                    onClick={(e) => {
                                        setEditing(true)
                                        e.stopPropagation()
                                    }}
                                    className="p-1 hover:text-white"
                                >
                                    <AiOutlineEdit/>
                                </button>
                                <button
                                    onClick={(e) => {

                                        setDeleting(true)
                                        e.stopPropagation()
                                    }}
                                    className="p-1 hover:text-white"
                                >
                                    <MdDeleteOutline/>
                                </button>
                            </>
                        )
                    }
                </div>
            )}
        </li>
    )
}