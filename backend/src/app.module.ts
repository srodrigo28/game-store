import { Module } from '@nestjs/common';
import { ProdutoModule } from './produto/produto.module';
import { DbModule } from './db/db.module';

@Module({
  imports: [ProdutoModule, DbModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
