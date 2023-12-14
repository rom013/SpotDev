import { ChatCircle } from "@phosphor-icons/react/dist/ssr"
import { memo, useState } from "react"
import { createPortal } from "react-dom"

function ButtonNewPost(){
    const [ showTextBoxNewPost, setShowTextBoxNewPost ] = useState(false)

    return(
        <>
            <button
                className="rounded-full bg-sky-400 py-2 px-4 flex items-center gap-3"
                onClick={()=>setShowTextBoxNewPost(!showTextBoxNewPost)}
            >
                <ChatCircle weight="bold" />
                <span>Nova postagem</span>
            </button>
            {
                showTextBoxNewPost && createPortal(
                    <section
                        className="w-10 h-10 bg-red-300"
                    ></section>, document.querySelector("#nwPost")
                )
            }
        </>
    )
}

export default memo(ButtonNewPost)