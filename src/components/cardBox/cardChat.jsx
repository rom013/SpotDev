import dayjs from "dayjs";

export default function CardChat({ username, created_at, talk }) {
    return (
        <div
            className="flex flex-col gap-5 max-w-4xl w-full"
        >
            <div
                className="flex gap-3"
            >
                <div
                    className="w-10 h-10 overflow-hidden rounded-full"
                >
                    <img
                        src={`https://github.com/${username}.png`}
                        alt=""
                        draggable={false}
                        className="w-full h-full object-cover"
                    />
                </div>
                <strong
                    className="text-2xl text-white font-lato capitalize"
                >
                    {username}
                </strong>

                <time
                    className="text-zinc-400 text-sm font-lato"
                >
                    {
                        dayjs(created_at).format("DD/MM/YYYY HH:mm")
                    }
                </time>
            </div>

            <p
                className="text-zinc-200 leading-relaxed"
            >
                {talk}
            </p>
        </div>
    )
}