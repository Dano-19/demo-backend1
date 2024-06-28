import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Nota } from './entities/nota.entity';
import { Repository  } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Nota)
    private notasRepository: Repository<Nota>,
  ) {}

  getHello(): string {
    const nota: Nota = new Nota();
    nota.description = 'Hello world!!';
    this.notasRepository.save(nota);
    return 'sucess!';
  }
}
