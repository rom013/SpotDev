import { useEffect, useState } from "react"
import { ButtonAddNewForum, ButtonNavigateForum, ButtonProfile } from "../buttons/button"
import { createClient } from "@supabase/supabase-js"

export default function MenuForum() {
    const supabase = createClient(import.meta.env.VITE_URL_SUPABASE, import.meta.env.VITE_API_KEY_SUPABASE)
    const [myForum, setForum] = useState([])

    useEffect(() => {
        supabase
            .from('forum')
            .select('id, name_forum, img_forum')
            .eq("active", true)
            .then(({data}) => {
                setForum(data)
            })
    }, [])

    return (
        <article
            className="py-10 px-4 bg-zinc-800 h-screen flex flex-col justify-between sticky top-0"
        >
            <div
                className="flex flex-col gap-3"
            >
                {
                    myForum.map(forum => {
                        return <ButtonNavigateForum
                            logoForum={forum.img_forum}
                            id={forum.id}
                        />
                    })
                }

                <ButtonAddNewForum />
            </div>

            <ButtonProfile
                username={localStorage.getItem("username")}
            />
        </article>
    )
}