import Produto from "../produto/Produto";

const produtos: Produto[] = [
    {
        id: 1,
        nome: 'Notebook Gamer Acer Nitro 5',
        descricao: 'Core i7  notebook Gamer Geração 12',
        marca: 'Acer',
        modelo: 'AN5145-54-58CL',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_924427-MLU70783024662_082023-F.webp',
        nota: 4.5,
        videoReview: '...',
        tags: ['Baixou'],
        preco: 7900.99,
        precoMedio: 67999,
        precoBase: 6499.59,
        precoPromocional: 5999.99,
        menorPreco: 4850.99,
        maiorPreco: 7999.88,
        especificacoes: {
            destaque: 'NVIDIA GeForce RTX 2060',
            Processador: 'Intel Core i5-9300H',
            Memória: '16GB DDR4',
            Armazenamento: '512GB SSD M2 NVME',
            Tela: '15.6 Polegadas Full HD',
            Peso: '2.5  Kg',
        },
    }
]
export default produtos