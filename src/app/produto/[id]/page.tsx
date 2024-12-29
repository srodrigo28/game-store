import { produtos } from "@/core"

export default function PaginaProduto(props: any){
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