import Especificacoes from "./Especificacoes"
import Precificavel from "./Precificavel"

export default interface Produto extends Precificavel{
    id: number
    nome: string
    descricao: string
    preco: number
    marca: string
    modelo: string
    imagem: string
    videoReview: string
    nota: number
    tags: string[]
    especificacoes: Especificacoes
}