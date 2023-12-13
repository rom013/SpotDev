import { ChatCircle } from "@phosphor-icons/react/dist/ssr"
import { memo } from "react"

function ButtonNewPost(){
    return(
        <button
            className="rounded-full bg-sky-400 py-2 px-4 flex items-center gap-3"
        >
            <ChatCircle weight="bold" />
            <span>Nova postagem</span>
        </button>
    )
}

export default memo(ButtonNewPost)