import { memo } from "react"

function MenuMembers(){
    return(
        <article
            className="py-10 px-4 bg-zinc-800 h-screen flex flex-col min-w-[232px] gap-8"
        >
            <div
                className="flex flex-col gap-5"
            >
                <span
                    className="text-zinc-400 text-lg"
                >
                    Founder - 1
                </span>

                <div
                    className="flex flex-col gap-2"
                >
                    <MemberProfile username={"rom013"} />
                </div>

            </div>
            <div
                className="flex flex-col gap-5"
            >
                <span
                    className="text-zinc-400 text-lg"
                >
                    Mentors - 2
                </span>

                <div
                    className="flex flex-col gap-2"
                >
                    <MemberProfile username={"peas"} />
                    <MemberProfile username={"rafaballerini"} />
                </div>

            </div>

        </article>
    )
}

function MemberProfile({ username }){
    return(
        <div
            className="flex items-center gap-3"
        >
            <div
                className="w-10 h-10 overflow-hidden rounded-full"
            >
                <img 
                    src={`https://github.com/${username}.png`}
                    className="h-full w-full object-cover"
                />
            </div>

            <span
                className="font-lato text-lg text-white capitalize"
            >
                { username }
            </span>
        </div>
    )
}

export default memo(MenuMembers)