import { SmileyWink } from "@phosphor-icons/react";
import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

export default function TextBoxChat({ idPost, loading, controlLoading }) {

    const supabase = createClient(import.meta.env.VITE_URL_SUPABASE, import.meta.env.VITE_API_KEY_SUPABASE)

    const [ valueInput, setValueInput ] = useState("")
    const [ errorMessage, setErrorMessage ] = useState("")

    const handleNewTalk = () => {
        valueInput.trim().length != 0 ? (
            controlLoading(true),
            supabase
                .from("chat")
                .insert([
                    { tx_talk: valueInput, nm_member: localStorage.getItem("username"), id_post: idPost },
                ])
                .then(e => {
                    setValueInput("")
                    controlLoading(false)
                })
        ) 
        : (
            setErrorMessage("Campo vazio!")
        )
    }

    useEffect(()=>{
        setErrorMessage("")
    },[valueInput])

    return (
        <label
            className="w-full relative"
        >
            <button
                className="p-1 rounded bg-zinc-700 text-white absolute top-2 right-4"
            >
                <SmileyWink size={16} />
            </button>
            <input
                disabled={loading}
                type="text"
                placeholder={`Conversar com `}
                className="w-full disabled:opacity-25 text-base placeholder:text-zinc-600 px-4 py-2 rounded-lg bg-zinc-800 border-2 border-transparent focus:border-sky-400 focus-within:outline-none text-zinc-300"
                onKeyUp={e => e.key == "Enter" && handleNewTalk()}
                onChange={e => setValueInput(e.target.value)}
                value={valueInput}
            />

        	{
                errorMessage && (
                    <span
                        className="absolute -bottom-6 left-0 text-red-600"
                    >
                        {
                            errorMessage
                        }
                    </span>
                )
            }
        </label>
    )
}