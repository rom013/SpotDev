import { useEffect, useState } from "react"
import ButtonNewPost from "../buttons/buttonNewPost"
import CardPost from "../cardBox/cardPost"
import { createClient } from "@supabase/supabase-js"
import { useParams } from "react-router-dom"

export default function Posts({ controllScreen }) {

    const { id } = useParams()
    const supabase = createClient(import.meta.env.VITE_URL_SUPABASE, import.meta.env.VITE_API_KEY_SUPABASE)

    const [forum, setForum] = useState({
        name: "",
        image: "",
        active: null,
        posts: []
    })

    useEffect(() => {
        const fetchForums = async () => {
            const { data: forums } = await supabase
                .from("forum")
                .select("name_forum, img_forum, active, id")
                .eq("id", id)

            const forumList = await Promise.all(
                forums.map(async (forum) => {
                    console.log(forum);
                    const { data: posts, error: tagError } = await supabase
                        .from('posts')
                        .select('title, description, id')
                        .eq('id_forum', forum.id);

                    if (tagError) {
                        console.error(tagError);
                        return;
                    }

                    return {
                        ...forum,
                        posts: posts
                    };
                }));


            setForum({
                active: forumList[0].active,
                image: forumList[0].img_forum,
                name: forumList[0].name_forum,
                posts: forumList[0].posts
            })
        }

        fetchForums()
    }, [id])

    return (
        <>
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
                className="z-30 container w-full flex flex-col gap-8 pb-20 h-[calc(100vh-30vh)] overflow-y-hidden hover:overflow-y-scroll px-20"
            >
                {
                    forum.posts.length === 0
                        ? <p className="w-full text-center text-zinc-600 text-lg">Não há nenhuma interação nessa comunidade</p>
                        : forum.posts.map((post, i) => {
                            return (
                                <CardPost
                                    description={post.description}
                                    title={post.title}
                                    key={i}
                                    controllScreen={controllScreen}
                                    id={post.id}
                                />
                            )
                        })
                }
            </section>
        </>
    )
}