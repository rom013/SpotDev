export default function CardForum({ logo, nameForum, users = 0, tags = [] }) {
    return (
        <button
            className="bg-zinc-800 rounded-lg p-2 w-64 flex gap-3"
        >
            <div
                className="min-w-[64px] h-16 rounded overflow-hidden"
            >
                <img
                    src={logo}
                    alt={nameForum}
                    className="w-full h-full object-cover"
                />
            </div>

            <div
                className="flex flex-col gap-3"
            >
                <div
                    className="flex flex-col items-start"
                >
                    <strong
                        className="text-white font-bold text-lg font-baiJamjuree text-start"
                    >
                        { nameForum }
                    </strong>

                    <span
                        className="font-lato text-sm text-white"
                    >
                        { users } users
                    </span>
                </div>

                <div
                    className="text-zinc-500 text-[10px] flex gap-2"
                >
                    {
                        tags.map(tag => {
                            return(
                                <span className="w-max">#{tag}</span>
                            )
                        })
                    }
                </div>
            </div>
        </button >
    )
}