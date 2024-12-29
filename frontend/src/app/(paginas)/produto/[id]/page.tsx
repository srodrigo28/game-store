'use client'

import { Produto } from "@/core"
import { useEffect, useState } from "react"
import useProdutos from "@/data/hooks/useProdutos"

export default function PaginaProduto(props: any){
    const { obterProdutoPorId } = useProdutos()
    const [produto, setProduto] = useState<Produto | null>(null)

    useEffect(() => {
        obterProdutoPorId(+props.params.id).then(setProduto)
    }, [props.params.id, obterProdutoPorId])

    return produto ? 
        <div> {produto?.nome} - <img src={produto?.imagem} alt="" /> </div> : <h1>Produto não encontrado</h1>
}