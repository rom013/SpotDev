import { createClient } from "@supabase/supabase-js"
import { useEffect, useState } from "react"
import CardChat from "../cardBox/cardChat"

export default function Chat({ id }) {

    const supabase = createClient(import.meta.env.VITE_URL_SUPABASE, import.meta.env.VITE_API_KEY_SUPABASE)

    const [infoChat, setInfoChat] = useState([])

    useEffect(() => {
        supabase
            .from("chat")
            .select("id, tx_talk, nm_member, created_at")
            .eq("id_post", id)
            .then(({ data }) => setInfoChat(data))
    }, [])

    return (
        <section 
            className="z-30 flex flex-col gap-8"
        >
            {
                infoChat.map((chat, i) => {
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
        </section>
    )
}