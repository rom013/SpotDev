import MenuForum from "../components/menu/menuForum";
import Logo from "../assets/img/logo-secundary.svg"
import CardForum from "../components/cardBox/cardForum";

export default function Home(){
    return(
        <main
            className="min-h-screen bg-zinc-900 flex"
        >
            <MenuForum/>

            <main
                className="flex-1 flex flex-col items-center"
            >
                <div
                    className="w-80 h-32"
                >
                    <img 
                        src={Logo} 
                        alt="Logo SpotDev"
                        className="w-full h-full" 
                        draggable={false}
                    />
                </div>

                <section
                    className="max-w-5xl w-full flex flex-col gap-6"
                >
                    <h2
                        className="font-baiJamjuree font-bold text-2xl text-white line-title"
                    >
                        Comunidades
                    </h2>

                    <div
                        className="flex gap-5 flex-wrap justify-center"
                    >
                        
                    </div>
                </section>
            </main>
        </main>
    )
}