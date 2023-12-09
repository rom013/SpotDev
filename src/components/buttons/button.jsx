/**
 * @param { { 
* type: "submit" | "button"; 
* nameButton;
* disabled;
* }} props Propriedades para o componente
*/

export default function Button({ type, nameButton, disabled = false }) {
    return (
        <button
            className="bg-sky-400 hover:bg-sky-500 disabled:opacity-70 p-3 text-center rounded-lg text-black font-baiJamjuree font-bold text-base w-full"
            type={type}
            disabled={disabled}
        >
            {nameButton}
        </button>
    )
}