import {useMemo, useState} from "react";
import {Chat} from "@/types/chat";
import {PiChatBold} from "react-icons/pi";
import {groupByDate} from "@/components/common/util";
import ChatItem from "@/components/home/Navigation/ChatItem";

export default function ChatList() {
    const [chatList, setChatList] = useState<Chat[]>([
        {
            id: "1",
            title: "React入门实战教程",
            updateTime: Date.now()
        },
        {
            id: "2",
            title: "如何使用Next.js创建React项目",
            updateTime: Date.now() + 1
        },
        {
            id: "3",
            title: "Hyplus小课",
            updateTime: Date.now() + 2
        },
        {
            id: "4",
            title: "React Hooks",
            updateTime: Date.now() + 3
        },
        {
            id: "5",
            title: "React Router",
            updateTime: Date.now() - 4
        },
        {
            id: "6",
            title: "React Native",
            updateTime: Date.now() - 5 - 1000 * 60 * 60 * 24 * 7
        },
        {
            id: "7",
            title: "React Native for Web",
            updateTime: Date.now() - 5 - 1000 * 60 * 60 * 24 * 31
        },
        {
            id: "8",
            title: "React Native for Web",
            updateTime: Date.now() + 2
        },
        {
            id: "9",
            title: "React Native",
            updateTime: Date.now() - 5 - 1000 * 60 * 60 * 24 * 7
        },
        {
            id: "10",
            title: "React Native for Web",
            updateTime: Date.now() - 5 - 1000 * 60 * 60 * 24 * 31
        },
        {
            id: "11",
            title: "React Native for Web",
            updateTime: Date.now() + 2
        },
        {
            id: "12",
            title: "React Native for Web",
            updateTime: Date.now() + 2
        },
        {
            id: "13",
            title: "React Native",
            updateTime: Date.now() - 5 - 1000 * 60 * 60 * 24 * 7
        },
        {
            id: "14",
            title: "React Native for Web",
            updateTime: Date.now() - 5 - 1000 * 60 * 60 * 24 * 31
        },
        {
            id: "15",
            title: "React Native for Web",
            updateTime: Date.now() + 2
        }
    ])

    const [selectedChat, setSelectedChat] = useState<Chat>()
    const groupList = useMemo(() => {
        return groupByDate(chatList)
    }, [chatList])

    return (
        <div className="flex-1 my-mb-48px mt-2 flex flex-col overflow-y-auto">
            {
                groupList.map(([date, list]) => {
                    return (
                        <div key={date} className="flex flex-col">
                            <div className="sticky top-0 z-10 p-3 text-sm bg-gray-900 text-gray-500">
                                {date}
                            </div>
                            <ul>
                                {list.map(item => {
                                    const selected = selectedChat?.id === item.id
                                    return (
                                        <ChatItem key={item.id} item={item} selected={selected} onSelected={(chat) => {
                                            setSelectedChat(chat)
                                        }}/>
                                    )
                                })}
                            </ul>
                        </div>
                    )
                })
            }
        </div>
    )
}