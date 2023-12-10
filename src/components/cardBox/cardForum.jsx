import { useState } from "react"
import { createPortal } from "react-dom"

export default function CardForum({ logo, nameForum, users = 0, tags = [] }) {
    const [ showModal, setShowModal ] = useState(false)
    
    return (
        <button
            className="bg-zinc-800 rounded-lg p-2 w-64 flex gap-3 items-center hover:bg-zinc-700 transition-all"
            onClick={()=>setShowModal(!showModal)}
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
            {
                showModal && createPortal(
                    <ModalAddNewMember
                        img={logo}
                        name={nameForum}
                        tags={tags}
                    />,
                    document.body
                )
            }
        </button >
    )
}

function ModalAddNewMember({ img, name, tags, controllModal }){
    return(
        <main
            className="absolute inset-0 bg-sky-900/40 backdrop-blur-sm flex justify-center items-center"
        >
            <section
                className="bg-zinc-800 p-6 rounded-2xl w-full max-w-lg"
            >
                <div
                    className="flex gap-6"
                >
                    <div
                        className="min-w-[8rem] h-32 overflow-hidden rounded-lg"
                    >
                        <img 
                            src={img} 
                            alt={name} 
                            className="object-cover h-full w-full"
                        />
                    </div>

                    <div className="flex flex-col gap-2 w-full">
                        <h3
                            className="font-baiJamjuree font-bold text-4xl text-white"
                        >
                            {name}
                        </h3>

                        <div
                            className="flex text-zinc-300 gap-2 flex-wrap"
                        >
                            {
                                tags.map(tag => {
                                    return(
                                        <span className="italic">#{tag}</span>
                                    )
                                })
                            }
                        </div>

                        <div className="flex mt-6">
                            <button
                                onClick={()=>console.log("ooo")}
                                className="rounded-lg hover:bg-sky-300 bg-sky-400 text-black text-lg font-bold font-baiJamjuree py-2 px-6 w-full text-center"
                            >
                                Fazer parte
                            </button>
                        </div>
                    </div>
                </div>


            </section>
        </main>
    )
}