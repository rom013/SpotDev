import MenuForum from "../components/menu/menuForum";
import MenuMembers from "../components/menu/menuMembers";
import { Back } from "../components/buttons/button";
import LogoGray from "../assets/img/logo-gray.svg"
import Posts from "../components/forum/Post";
import { useState } from "react";
import Chat from "../components/forum/Chat";


export default function ForumPage() {

    const [screen, setScreen] = useState("")


    function Screen() {
        switch (screen) {
            case "post":
                return <Posts controllScreen={setScreen} />
            case "chat":
                return <Chat id={1} />
            default:
                return <Posts controllScreen={setScreen} />
        }
    }

    return (
        <main
            className="min-h-screen bg-zinc-900 flex"
        >
            <MenuForum />

            <main
                className="flex-1 flex flex-col items-center pt-20 gap-20 relative"
            >
                <Back
                    className={"absolute top-10 left-20"}
                />

                <Screen />


                <img
                    src={LogoGray}
                    alt="logo"
                    draggable={false}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />

            </main>

            <MenuMembers />
        </main>
    )
}