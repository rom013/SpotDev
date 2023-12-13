import { useParams } from "react-router-dom";
import MenuForum from "../components/menu/menuForum";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import ButtonNewPost from "../components/buttons/buttonNewPost";
import CardPost from "../components/cardBox/cardPost";
import MenuMembers from "../components/menu/menuMembers";

export default function ForumPage() {
    const { id } = useParams()
    const supabase = createClient(import.meta.env.VITE_URL_SUPABASE, import.meta.env.VITE_API_KEY_SUPABASE)

    const [forum, setForum] = useState({
        name: "",
        image: "",
        active: null
    })

    useEffect(() => {
        const fetchForums = async () => {
            supabase
                .from("forum")
                .select("name_forum, img_forum, active")
                .eq("id", id)
                .then(({ data: forum }) => {
                    setForum({
                        active: forum[0].active,
                        image: forum[0].img_forum,
                        name: forum[0].name_forum
                    })
                })
            }
            fetchForums()
    }, [id])


    return (
        <main
            className="min-h-screen bg-zinc-900 flex"
        >
            <MenuForum />

            <main
                className="flex-1 flex flex-col items-center pt-20 gap-20"
            >
                <section
                    className="flex w-full items-center justify-between px-20"
                >
                    <div
                        className="flex gap-8 items-center"
                    >
                        <div
                            className="w-16 h-16 overflow-hidden rounded-full"
                        >
                            <img
                                src={forum.image}
                                alt=""
                                className="h-full w-full object-cover"
                                draggable={false}
                            />
                        </div>
                        <h2
                            className="text-white text-[2rem] font-bold uppercase"
                        >
                            {
                                forum.name
                            }
                        </h2>

                    </div>

                    <ButtonNewPost />
                </section>

                <section
                    className="container w-full flex flex-col gap-8 pb-20 h-[calc(100vh-30vh)] overflow-y-hidden hover:overflow-y-scroll px-20"
                >

                    <CardPost
                        title={"ReferenceError: can't access lexical declaration 'prevImage' before initialization"}
                        description={"Pessoal, sabem me explicar o que está ocorrendo aqui? Na primeira imagem está o meu código, na segunda o código do professor-youtuber. O meu tá dando erro pq estou chamando a variável ( prevImage ) antes de declará-la, mas o do professor não dá este erro pq ele está chamando a variável de dentro de uma function  Eu sei que não se deve chamar let ou const antes de declará-la. Mas pq a chamada que está ocorrendo de dentro de uma function não está dando este erro?"}
                    />
                    

                </section>
            </main>

            <MenuMembers/>
        </main>
    )
}