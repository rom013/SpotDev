import { SmileyWink } from "@phosphor-icons/react";

export default function TextBoxChat(){
    return(
        <label
            className="w-full relative"
        >
            <button
                className="p-1 rounded bg-zinc-700 text-white absolute top-2 right-4"
            >
                <SmileyWink size={16} />
            </button>
            <input 
                type="text"
                placeholder={`Conversar com `}
                className="w-full text-base placeholder:text-zinc-600 px-4 py-2 rounded-lg bg-zinc-800 border-2 border-transparent focus:border-sky-400 focus-within:outline-none text-zinc-300"
            />
        </label>
    )
}