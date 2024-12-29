import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { Produto, produtos } from './../core'
@Controller('produto')
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

  @Get()
  obterProdutos(): Produto[]{
    return produtos
  }

  @Get(':id')
  async obterProdutoPorId(@Param('id') id: string): Promise<Produto | string>{
    // return "Deu certo: " + id;
    const produto= produtos.find((produto) => produto.id === +id );
    return produto ? produto : 'Produto não encontrado'
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
