import LogoForum from "../../assets/img/logoForum.png"
import { ButtonAddNewForum, ButtonNavigateForum, ButtonProfile } from "../buttons/button"

export default function MenuForum() {
    return (
        <article
            className="py-10 px-4 bg-zinc-800 h-screen flex flex-col justify-between"
        >
            <div
                className="flex flex-col gap-3"
            >
                <ButtonNavigateForum
                    logoForum={LogoForum}
                />

                <ButtonAddNewForum/>
            </div>

            <ButtonProfile
                username={localStorage.getItem("username")}
            />
        </article>
    )
}