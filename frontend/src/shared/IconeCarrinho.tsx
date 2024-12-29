import { IconShoppingCart } from "@tabler/icons-react"

export interface IconeCarrinhoProps{
    qtdItens: number
}

export default function IconeCarrinho(props: IconeCarrinhoProps){
    return(
        <div className="flex justify-center items-center rounded-full
            bg-zinc-900 relative w-20">
            
            <IconShoppingCart size={50} stroke={1.3} className="p-2 w-20" />
            
            <div className=" text-white text-xs font-semibold rounded-full w-10 
            h-10 flex items-center justify-center">
                {props.qtdItens ?? 0}
            </div>
        </div>
    )
}