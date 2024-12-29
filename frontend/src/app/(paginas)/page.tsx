'use client'

import ProdutoItem from "@/components/produto/ProdutoItem";
import Pagina from "@/components/templates/Pagina";
import useProdutos from "@/data/hooks/useProdutos";

export default function Home() {
  const { produtos } = useProdutos()
  return (
            <div className="grid md:grid-cols-4 gap-5 ">
              {produtos.map( produto => (
                <ProdutoItem  key={produto.id} produto={produto} />
              ))
            }  
          </div>
  );
}
