import Logo from "@/shared/Logo";
import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconBrandWhatsapp, IconBrandYoutube, IconHeartCode } from "@tabler/icons-react";

export default function Rodape(){
    return(
        <footer className="flex mt-5 flex-col bg-black/30 text-zinc-400 container">
            <div className="h-px bg-gradient-to-r flex flex-col justify-between md:flex-row 
                    items-center from-violet-600/20 via-violet-600/80 to-violet-600/20 ">
                    
            </div>
            <div className="mb-2 mt-2 flex flex-col md:flex-row justify-between">
                <Logo />
                <div className="hidden md:flex flex-col gap-1 ">
                    <span className="text-sm font-semibold text-zinc-600">By corporation</span>
                    <span className="text-sm font-semibold text-zinc-600">Nossa História</span>
                    <span className="text-sm font-semibold text-zinc-600">Nossa Política de Privacidade</span>
                    <span className="text-sm font-semibold text-zinc-600">Termos de uso do sistema</span>
                </div>
                <div className="flex flex-col gap-1 items-center">
                    <span className="text-sm font-semibold text-zinc-600">contato</span>
                    <span className="text-sm font-semibold text-zinc-600">suporte@gmail.com</span>
                    <div className="flex items-center justify-center md:self-end bg-zinc-800 py-1 px-3 rounded-md">
                        <h3 className="text-md mr-2 font-bold text-green-600">Agora !</h3>
                        <IconBrandWhatsapp size={40} className="text-green-600" />
                    </div>
                </div>
            </div>
            <div className="md:flex md:justify-between flex items-center justify-center">
                <div className="flex items-end md:gap-2 gap-12 p-2 rounded-lg">
                    <IconBrandYoutube size={28}/>
                    <IconBrandInstagram size={28}/>
                    <IconBrandFacebook size={28}/>
                    <IconBrandLinkedin size={28}/>
                </div>
                <div className="hidden md:block">
                    <h3 className="md:flex">Feito com amor desenvolvendo <span className="px-3"><IconHeartCode className="text-red-700" /></span> elevação social e qualificação. <span>{ new Date().getFullYear() }</span> </h3>
                </div>
            </div>
        </footer>
    )
}