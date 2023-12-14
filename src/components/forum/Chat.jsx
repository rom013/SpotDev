import { createClient } from "@supabase/supabase-js"
import { useEffect, useState } from "react"
import CardChat from "../cardBox/cardChat"
import TextBoxChat from "../textBox/textBoxChat"

export default function Chat({ id }) {

    const supabase = createClient(import.meta.env.VITE_URL_SUPABASE, import.meta.env.VITE_API_KEY_SUPABASE)

    const [infoChat, setInfoChat] = useState([])

    useEffect(() => {
        supabase
            .from("chat")
            .select("id, tx_talk, nm_member, created_at")
            .eq("id_post", id)
            .then(({ data }) => {
                setInfoChat(data)
            })
    }, [])

    return (
        <section
            className="z-30 w-full px-20 flex-1 flex flex-col justify-between pb-10"
        >
            <div 
                className="container flex-1 flex flex-col gap-8 max-h-[calc(100vh-150px)] pb-20 overflow-y-hidden hover:overflow-y-scroll "
            >
                {
                    infoChat.length === 0
                    ? <p className="w-full text-center text-zinc-600 text-lg">Não há nenhuma interação nesse post</p>
                    : infoChat.map((chat, i) => {
                        return (
                            <CardChat
                                created_at={chat.created_at}
                                talk={chat.tx_talk}
                                username={chat.nm_member}
                                key={i}
                            />
                        )
                    })
                }

            </div>
            <TextBoxChat/>
        </section>
    )
}