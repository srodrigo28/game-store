import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Produto } from './../core'
import { ProdutoPrima } from './produto.prima';
@Controller('produto')
export class ProdutoController {
  constructor(private readonly repo: ProdutoPrima) {}

  @Post()
  async SalvarEditar(@Body() produto: Produto): Promise<void>{
    return await this.repo.salvarOrAlterar(produto);
  }

  @Get()
  async obterProdutos(): Promise<Produto[]>{
    return this.repo.obter();
  }

  @Get("/resumo")
  async obterResumoProdutos(): Promise<Produto[]>{
    return this.repo.obterResumo();
  }

  @Get(':id')
  async obterProdutoPorId(@Param('id') id: string): Promise<Produto | string>{
    return this.repo.obterPorId(Number(id));
  }
  
  @Delete(':id')
  async ExcluirProdutoPorId(@Param('id') id: string): Promise<void>{
    return this.repo.excluir(Number(id));
  }
  
  /** 
    @Post()
    create(@Body() createProdutoDto: CreateProdutoDto) {
      return this.produtoService.create(createProdutoDto);
    }

    @Get()
    findAll() {
      return this.produtoService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.produtoService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateProdutoDto: UpdateProdutoDto) {
      return this.produtoService.update(+id, updateProdutoDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.produtoService.remove(+id);
    }
  */
}
