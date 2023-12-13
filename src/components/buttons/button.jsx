/**
 * @param { { 
* type: "submit" | "button"; 
* nameButton;
* disabled;
* }} props Propriedades para o componente
*/

import { Plus, SignOut, X } from "@phosphor-icons/react"
import { createClient } from "@supabase/supabase-js";
import axios from "axios"
import { memo, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";



export function ButtonAccess({ type, nameButton, disabled = false, data, message }) {
    const navigate = useNavigate()

    function handleSubmit() {
        axios.get(`https://api.github.com/users/${data}`)
            .then(({ data: res }) => {
                localStorage.setItem("username", data)
                navigate("/")
            })
            .catch(err => {
                message({
                    active: true,
                    message: err.response.data.message
                })
            })
    }

    return (
        <button
            className="bg-sky-400 hover:bg-sky-500 disabled:opacity-70 p-3 text-center rounded-lg text-black font-baiJamjuree font-bold text-base w-full"
            type={type}
            disabled={disabled}
            onClick={handleSubmit}
        >
            {nameButton}
        </button>
    )
}

export function ButtonNavigateForum({ logoForum, id }) {
    const navigate = useNavigate()

    return (
        <button
            type="button"
            className="h-10 w-10 rounded-full overflow-hidden"
            onClick={()=>navigate(`/forum/${id}`)}
        >
            <img
                src={logoForum}
                alt=""
                className="w-full h-full object-cover"
                draggable={false}
            />
        </button>
    )
}

export function ButtonAddNewForum() {
    return (
        <button
            type="button"
            className="h-10 w-10 rounded-full border-2 border-dashed border-indigo-400 flex justify-center items-center"
        >
            <Plus size={20} weight="bold" color="#fff" />
        </button>
    )
}

function ButtonProfile({ username }) {
    const navigate = useNavigate()
    const [showInfoUser, setShowInfoUser] = useState(false)
    const [infoUser, setInfoUser] = useState({
        followers: null,
        following: null
    })

    useEffect(() => {
        console.log("oo");
        axios.get(`https://api.github.com/users/${username}`)
            .then(e => {
                setInfoUser({
                    followers: e.data.followers,
                    following: e.data.following
                })
            })
            .catch(e => console.log(e))
    }, [])

    return (
        <div
            className="relative"
        >
            <button
                type="button"
                className="h-10 w-10 overflow-hidden rounded-full border-2 border-indigo-400"
                onClick={() => setShowInfoUser(!showInfoUser)}
            >
                <img
                    src={`https://github.com/${username}.png`}
                    alt={username}
                    draggable={false}
                />
            </button>

            {
                showInfoUser && (
                    <div
                        className="absolute bg-zinc-800 p-3 rounded flex flex-col gap-6 left-[200%] bottom-0"
                    >
                        <button
                            className="absolute right-3 top-3 text-neutral-400"
                            onClick={() => setShowInfoUser(!showInfoUser)}
                        >
                            <X size={14} />
                        </button>
                        <div
                            className="flex flex-col"
                        >
                            <a
                                href={`https://github.com/${username}`}
                                target="_blank"
                                className="font-lato text-base font-medium text-white hover:underline transition-all w-fit"
                            >
                                @{username}
                            </a>
                            <div
                                className="flex gap-2 text-neutral-500 text-xs w-max"
                            >
                                <p>
                                    Seguidores: {infoUser.followers}
                                </p>
                                <p>
                                    Seguindo: {infoUser.following}
                                </p>
                            </div>
                        </div>

                        <button
                            className="text-red-500 flex gap-2 items-center w-fit"
                            onClick={() => {
                                localStorage.removeItem("username")
                                navigate("/login")
                            }}
                        >
                            <SignOut size={18} />
                            Sair
                        </button>
                    </div>
                )
            }

        </div>
    )
}

const memoButtonProfile = memo(ButtonProfile)
export { memoButtonProfile as ButtonProfile }
