import { GithubLogo } from "@phosphor-icons/react"
import Logo from "../assets/img/logo.svg"
import TextBoxLogin from "../components/textBox/textBoxLogin"
import { Button } from "../components/buttons/button"
import ImageBackground from "../components/imageBackground"

export default function Login(){
    return(
        <main
			className="min-h-screen bg-zinc-900 flex items-center justify-center"
		>
			<section
				className="flex flex-col gap-20 z-30 mb-20"
			>
				<div
					className="flex flex-col items-center"
				>
					<img
						src={Logo}
						alt="Logo SpotDev"
						draggable={false}
					/>
					<strong
						className="font-lato font-medium text-zinc-400 text-2xl"
					>
						Faça login e comece a usar
					</strong>
				</div>

				<form
					onSubmit={e => e.preventDefault()}
					className="flex flex-col gap-6"
				>
					<TextBoxLogin
						placeholder={"Username GitHub"}
						icon={
							<GithubLogo
								className="text-gray-300 absolute top-1/2 -translate-y-1/2 left-4"
								size={18}
							/>
						}
					/>
					<Button
						type="submit"
						nameButton={"Entrar"}
					/>
				</form>
			</section>
					
			<ImageBackground/>
		</main>
    )
}