import MenuForum from "../components/menu/menuForum";
import Logo from "../assets/img/logo-secundary.svg"
import CardForum from "../components/cardBox/cardForum";
import { useEffect, useState } from "react";

import { createClient } from '@supabase/supabase-js'


export default function Home() {
    const [forum, setForum] = useState([])
    const supabase = createClient(import.meta.env.VITE_URL_SUPABASE, import.meta.env.VITE_API_KEY_SUPABASE)

    useEffect(() => {
        const fetchForums = async () => {
            const { data: forums, error } = await supabase
                .from('forum')
                .select('id, name_forum, img_forum, active');

            if (error) {
                console.error(error);
                return;
            }

            const forumList = await Promise.all(
                forums.map(async (forum) => {
                    const { data: tags, error: tagError } = await supabase
                        .from('tag_relation')
                        .select('tags:id_tag (nm_tag)')
                        .eq('id_forum', forum.id);

                    if (tagError) {
                        console.error(tagError);
                        return;
                    }

                    return {
                        ...forum,
                        tags: tags.map((tagRelation) => tagRelation.tags.nm_tag),
                    };
                }));

            setForum(forumList);
        };

        fetchForums();
    }, [])

    return (
        <main
            className="min-h-screen bg-zinc-900 flex"
        >
            <MenuForum />

            <main
                className="flex-1 flex flex-col items-center"
            >
                <div
                    className="w-80 h-32"
                >
                    <img
                        src={Logo}
                        alt="Logo SpotDev"
                        className="w-full h-full"
                        draggable={false}
                    />
                </div>

                <section
                    className="max-w-5xl w-full flex flex-col gap-6"
                >
                    <h2
                        className="font-baiJamjuree font-bold text-2xl text-white line-title"
                    >
                        Comunidades
                    </h2>

                    <div
                        className="flex gap-5 flex-wrap justify-center"
                    >
                        {
                            forum.map((f, i) => {
                                return (
                                    <CardForum
                                        logo={f.img_forum}
                                        nameForum={f.name_forum}
                                        key={i}
                                        tags={f.tags}
                                        id={f.id}
                                        active={f.active}
                                    />
                                )
                            })
                        }
                    </div>
                </section>
            </main>
        </main>
    )
}