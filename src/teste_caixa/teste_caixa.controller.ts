import { Controller, Get } from '@nestjs/common';
import { TesteCaixaService } from './shared/teste_caixa.service';

@Controller('teste-caixa')
export class TesteCaixaController {
    constructor(private service: TesteCaixaService) {}

    @Get('')
    findAll() {
      return this.service.findAll();
    }
  
}