import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconBrandYoutube } from "@tabler/icons-react";

export default function Rodape(){
    return(
        <footer className="flex px-10 bg-black/30 text-zinc-400 container">
            <div className="h-px bg-gradient-to-r flex flex-col justify-between md:flex-row items-center from-violet-600/20 via-violet-600/80 to-violet-600/20 ">
                <div className="bg-blue-600 flex gap-2 p-2 rounded-lg">
                    <IconBrandYoutube size={28}/>
                    <IconBrandInstagram size={28}/>
                    <IconBrandFacebook size={28}/>
                    <IconBrandLinkedin size={28}/>
                </div>
                <div className="bg-red-700">B</div>
                <div className="bg-green-700">C</div>
            </div>
        </footer>
    )
}