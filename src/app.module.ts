import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TesteCaixaModule } from './teste_caixa/teste_caixa.module';

@Module({
  imports: [TesteCaixaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
