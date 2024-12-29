'use client'

import useProdutos from "@/data/hooks/useProdutos"

export default function PaginaProduto(props: any){
    const { produtos } = useProdutos()

    const id = +props.params.id
    const produto = produtos.find((p) => p.id === id)
    return produto ? 
        <div>
            {produto?.nome} 
        </div> 
        : 
        <div>
            <h1>Produto não encontrado</h1>
        </div>
}