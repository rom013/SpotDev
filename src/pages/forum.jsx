import MenuForum from "../components/menu/menuForum";
import MenuMembers from "../components/menu/menuMembers";
import { Back } from "../components/buttons/button";
import LogoGray from "../assets/img/logo-gray.svg"
import Posts from "../components/forum/Post";
import { useEffect, useState } from "react";
import Chat from "../components/forum/Chat";
import { useParams } from "react-router-dom";


export default function ForumPage() {

    const [screen, setScreen] = useState({
        page: "post",
        id: null
    })
    const { id } = useParams()
    useEffect(()=>{
        setScreen({
            page:"post",
            id:null
        })
    },[id])
    function Screen() {
        switch (screen.page) {
            case "post":
                return <Posts controllScreen={setScreen} id={id} />
            case "chat":
                return <Chat 
                    id={screen.id} 
                />
            default:
                return <Posts controllScreen={setScreen} id={id} />
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
                    navComponent={setScreen}
                    screen={screen}
                />

                <Screen />


                <img
                    src={LogoGray}
                    alt="logo"
                    draggable={false}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"
                />

            </main>

            <MenuMembers />
        </main>
    )
}