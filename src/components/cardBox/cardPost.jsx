import { memo } from "react"

function CardPost({ title, description, controllScreen, id }) {
    return (
        <button
            className="rounded-lg bg-zinc-800 p-6 w-full flex flex-col gap-2"
            onClick={()=>controllScreen({
                page: "chat",
                id: id
            })}
        >
            <strong
                className="text-white text-xl font-semibold font-lato"
            >
                { title }
            </strong>
            <p
                className="text-zinc-300 leading-relaxed text-base text-start"
            >
                { description }
            </p>
        </button>
    )
}

export default memo(CardPost)