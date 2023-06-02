// import { MongooseModule } from '@nestjs/mongoose';
// import { Task, TaskSchema } from './task.schema';
import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { TaskRepository } from './task.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskEntity } from './task.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TaskEntity])],
  controllers: [TaskController],
  providers: [TaskService, TaskRepository],
})
export class TaskModule {}

// MongooseModule.forFeature([{ name: Task.name, schema: TaskSchema }]),
