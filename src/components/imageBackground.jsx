import Wave from "../assets/img/wave.svg"
import Blob_01 from "../assets/img/blob_01.svg"
import Blob_02 from "../assets/img/blob_02.svg"
import Blob_03 from "../assets/img/blob_03.svg"
import Lazy from "../assets/img/lazy.svg"

export default function ImageBackground() {
    return (
        <>
            <img
                src={Wave}
                className="absolute bottom-0 w-full"
                draggable={false}
            />
            <img
                src={Lazy}
                draggable={false}
                className="absolute bottom-0 left-0 hidden lg:block"
            />
            <img
                src={Blob_01}
                draggable={false}
                className="absolute left-1/2 top-8 animate-bounce duration-500"
            />
            <img
                src={Blob_02}
                draggable={false}
                className="absolute left-3/4 top-20 animate-bounce duration-500"
            />
            <img
                src={Blob_03}
                draggable={false}
                className="absolute left-[10%] top-1/3 animate-bounce duration-500"
            />
        </>
    )
}