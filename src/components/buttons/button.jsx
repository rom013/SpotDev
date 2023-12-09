/**
 * @param { { 
* type: "submit" | "button"; 
* nameButton;
* disabled;
* }} props Propriedades para o componente
*/

import { Plus } from "@phosphor-icons/react"

export function Button({ type, nameButton, disabled = false }) {
    return (
        <button
            className="bg-sky-400 hover:bg-sky-500 disabled:opacity-70 p-3 text-center rounded-lg text-black font-baiJamjuree font-bold text-base w-full"
            type={type}
            disabled={disabled}
        >
            {nameButton}
        </button>
    )
}

export function ButtonNavigateForum({ logoForum }) {
    return (
        <button
            type="button"
            className="h-10 w-10 rounded-full overflow-hidden"
        >
            <img
                src={logoForum}
                alt=""
                className="w-full h-full object-cover"
            />
        </button>
    )
}

export function ButtonAddNewForum({ logoForum }) {
    return (
        <button
            type="button"
            className="h-10 w-10 rounded-full border-2 border-dashed border-indigo-400 flex justify-center items-center"
        >
            <Plus size={20} weight="bold" color="#fff"/>
        </button>
    )
}

export function ButtonProfile({ username }){
    return(
        <div
            className="h-10 w-10 overflow-hidden rounded-full border-2 border-indigo-400"
        >
            <img src={`https://github.com/${username}.png`} alt={username} />
        </div>
    )
}