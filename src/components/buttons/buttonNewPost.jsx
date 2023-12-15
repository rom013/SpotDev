import { X } from "@phosphor-icons/react"
import { ChatCircle } from "@phosphor-icons/react/dist/ssr"
import { memo, useState } from "react"
import { createPortal } from "react-dom"

function ButtonNewPost(){
    const [ showTextBoxNewPost, setShowTextBoxNewPost ] = useState(false)

    return(
        <>  
            {
                !showTextBoxNewPost && (
                    <button
                        className="rounded-full bg-sky-400 py-2 px-4 flex items-center gap-3"
                        onClick={()=>setShowTextBoxNewPost(!showTextBoxNewPost)}
                    >
                        <ChatCircle weight="bold" />
                        <span>Nova postagem</span>
                    </button>
                )
            }
            {
                showTextBoxNewPost && createPortal(
                    <section
                        className="p-6 rounded-lg bg-zinc-800 flex flex-col gap-3 scale-up-hor-left relative"
                    >
                        <button
                            className="absolute top-6 right-6"
                            onClick={()=>setShowTextBoxNewPost(false)}
                        >
                            <X size={24} color="#fff" />
                        </button>
                        <input 
                            type="text"
                            className="bg-inherit placeholder:text-zinc-600 text-2xl font-lato text-zinc-200 focus:outline-none"
                            placeholder="Título:"
                        />
                        <textarea 
                            type="text"
                            className="bg-inherit placeholder:text-zinc-600 text-2xl font-lato text-zinc-200 focus:outline-none min-h-[2rem]"
                            placeholder="Mensagem..."
                        />
                        <div
                            className="w-full flex justify-end"
                        >
                            <button
                                className="bg-sky-400 rounded-full py-2 px-4 flex gap-3 items-center"
                                onClick={()=>setShowTextBoxNewPost(false)}
                            >
                                <ChatCircle weight="bold" />
                                <span>Postar</span>
                            </button>
                        </div>
                    </section>, 
                    document.querySelector("#nwPost")
                )
            }
        </>
    )
}

export default memo(ButtonNewPost)