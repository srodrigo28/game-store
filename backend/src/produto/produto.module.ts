import { Module } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { ProdutoController } from './produto.controller';
import { ProdutoPrima } from './produto.prima';
import { DbModule } from 'src/db/db.module';

@Module({
  imports: [DbModule], // verificar se necessário
  controllers: [ProdutoController],
  providers: [ProdutoService, ProdutoPrima],
})
export class ProdutoModule {}
