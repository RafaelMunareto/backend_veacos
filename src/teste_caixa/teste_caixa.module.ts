import { Module } from '@nestjs/common';
import { TesteCaixaController } from './teste_caixa.controller';
import { TesteCaixaService } from './shared/teste_caixa.service';

@Module({
  controllers: [TesteCaixaController],
  providers: [TesteCaixaService]
})
export class TesteCaixaModule {}
