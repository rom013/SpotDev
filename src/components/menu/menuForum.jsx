import { useEffect, useState } from "react"
import LogoForum from "../../assets/img/logoForum.png"
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


        // if (error) {
        //     console.error(error);
        //     return;
        // }

    }, [])

    return (
        <article
            className="py-10 px-4 bg-zinc-800 h-screen flex flex-col justify-between"
        >
            <div
                className="flex flex-col gap-3"
            >
                {
                    myForum.map(forum => {
                        return <ButtonNavigateForum
                            logoForum={forum.img_forum}
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