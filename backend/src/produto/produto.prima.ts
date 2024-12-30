import { Injectable } from '@nestjs/common';
import { create } from 'domain';
import { Produto } from 'src/core';
import { PrismaProvider } from 'src/db/prisma.provider';

@Injectable()
export class ProdutoPrima {
    constructor(readonly repo: PrismaProvider){}

    async obter(): Promise<Produto[]> {
        return  this.repo.produto.findMany() as any;
    }

    async obterResumo(): Promise<Produto[]> {
        return  this.repo.produto.findMany({
            select: { id: true, nome: true, imagem: true, precoMedio: true }
        }) as any;
    }

    async obterPorId(id: number): Promise<Produto | null> {
        const produto = await this.repo.produto.findUnique({ where: { id } }) 
        return (produto as  any) ?? null;
    }

    async salvarOrAlterar(produto: Produto): Promise<void> {
        await this.repo.produto.upsert({
            where: { id: produto.id ?? -1 },
            update: produto,
            create: produto
        })
    }
    
    async excluir (id: number) : Promise<void> {
        await this.repo.produto.delete( { where : { id }})
    }
}
