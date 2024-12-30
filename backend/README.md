
#### Starting backend

* comando para rodar o seeds
```
npx ts-node prisma/seed.ts
```

* rodar o prisma studio admin
```
npx prisma studio
```

* Gerar uma entidade nova
```
npx nest g res produto
```

* gerar provider produto
cd src/produto
npx nest g pr produto.prima --flat --no-spec

* gerar modulo de conexao db
npx nest g mo db

cd src/db

* gerar o provider de conexao db
npx nest g pr prisma.provider --flat --no-spec

* implements o prisma.provider
```
import { Global, Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Global()
@Injectable()
export class PrismaProvider extends PrismaClient implements 
    OnModuleInit, OnModuleDestroy {
        onModuleInit() {
            this.$connect();
        }
        onModuleDestroy() {
            this.$disconnect();
        }
    }
```

* atualizar o db.module.ts
```
import { Module } from '@nestjs/common';
import { PrismaProvider } from './prisma.provider';

@Module({
  providers: [PrismaProvider],
  exports: [PrismaProvider]

})
export class DbModule {}
```
