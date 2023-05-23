import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty({ message: 'Você precisa informar um ID' })
  @IsNumber({}, { message: 'Id precisa ser um número ' })
  id: number;

  @IsString({ message: 'Informe um nome válido' })
  @IsNotEmpty({ message: 'Você precisa informar um email ' })
  name: string;

  @IsNotEmpty({ message: 'Você precisa informar uma descrição' })
  @IsString({ message: 'Descrição precisa ser uma string' })
  description: string;

  @IsBoolean({ message: 'Completed precisa ser um bolean' })
  completed: boolean;
}
