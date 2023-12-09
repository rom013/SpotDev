import Shoes from "../../assets/img/shoes.svg"

export default function TextBoxLogin({ icon, placeholder, type = "text" }){
    return(
        <label
            className="relative w-full"
        >   
            <img 
                src={Shoes}
                className="absolute -top-[calc(100%+15px)] right-0 -z-10"
                draggable={false}
            />
            { icon }
            <input 
                className="p-4 pl-10 rounded placeholder:text-gray-500 valid:border-indigo-400 bg-zinc-800 w-full border-2 border-transparent focus:border-indigo-400 text-base text-gray-300 font-lato focus:outline-none"
                type={type}
                required
                placeholder={placeholder}
            />
        </label>
    )
}