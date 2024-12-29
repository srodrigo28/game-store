'use client'

import { Produto } from "@/core"
import { useEffect, useState } from "react"

export default function useProdutos(){
    const [produtos, setProdutos] = useState<Produto[]>([])

    async function obterProdutos(): Promise<Produto[]>{
        const resp = await fetch('http://localhost:4000/produto')
        const produtos = await resp.json();
        return produtos ?? [];
    }

    useEffect( () => {
        obterProdutos().then(setProdutos)
    }, [])
    
    return{
        produtos,
    }
}