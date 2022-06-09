import { Injectable } from '@nestjs/common';

@Injectable()
export class TesteCaixaService {
  private messages: any[] = [
    {
      id: 1,
      text: 'Primeira mensagem',
    },
    {
      id: 2,
      text: 'Segunda mensagem',
    },
  ];

  findAll() {
    return this.messages.filter(Boolean);
  }
}
