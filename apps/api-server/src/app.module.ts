import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as Controllers from './controllers';
import * as Services from '@services';
import { TypeOrmService } from '@config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmService,
    }),
  ],
  controllers: Object.values(Controllers),
  providers: Object.values(Services),
})
export class AppModule {}
