'use client'
import { Produto } from "@/core"
import { IconShoppingCartPlus } from "@tabler/icons-react"
import Image from "next/image"
import Link from "next/link"

export interface ProdutoItemProps{
    produto: Produto
}

export default function ProdutoItem(props : ProdutoItemProps){
    const { produto } = props
    return(
        <Link
            className="flex flex-col bg-zinc-900 border-2 mt-10 
                border-white/10 rounded-lg relative max-w-[350px]
            " 
            href={`/produto/${produto.id}`}>
            <div className="h-48 full relative">
                <Image
                    fill
                    src={produto.imagem}
                    alt="Image do produto"
                    className="object-contain"
                />
            </div>
            <div className="flex-1 flex gap-3 flex-col p-5 border-t-4 border-white/10">
                <span className="text-lg font-semibold">{produto.nome}</span>
                <span className="text-sm border-b border-dashed self-start">
                    {produto.especificacoes.destaque}
                </span>
                <div className="flex-1"></div>
                <div className="flex flex-col">
                    <span className="text-sm text-gay-400 line-through"> de {produto.precoBase}</span>
                    <span className="text-xl font-semibold text-green-600"> por {produto.precoPromocional}</span>
                </div>
                <button className=" flex bg-violet-700 rounded-full
                    justify-center items-center hover:border-4 
                    border-emerald-500 duration-200 h-10 gap-3
                "
                    onClick={(e: any) => {
                        e.preventDefault()
                        console.log('Adicionando ...')
                    }}
                >
                    <IconShoppingCartPlus />
                    <span className="">Adicionar</span>
                </button>
            </div>
        </Link>
    )
}