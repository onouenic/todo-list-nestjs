// import { InjectModel } from '@nestjs/mongoose';
// import { Model, UpdateWriteOpResult } from 'mongoose';
//import { Injectable } from '@nestjs/common';
import { GetTaskDto } from './dto/GetTask.dto';
import { CreateTaskDto } from './dto/CreateTask.dto';
import { UpdateTaskDto } from './dto/UpdateTask.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { TaskEntity } from './task.entity';

export class TaskRepository {
  constructor(
    @InjectRepository(TaskEntity)
    private readonly taskRepository: Repository<TaskEntity>,
  ) {}

  async findAll(): Promise<GetTaskDto[]> {
    return await this.taskRepository.find();
  }

  async createTask({ name }): Promise<CreateTaskDto> {
    return await this.taskRepository.save({ name });
  }

  async updateTask(
    id: string,
    { completed }: UpdateTaskDto,
  ): Promise<UpdateResult> {
    return await this.taskRepository.update(id, { completed });
  }

  async deleteTask(id: string): Promise<{ message: string }> {
    await this.taskRepository.delete(id);
    return { message: 'Task deleted successfully' };
  }
}

// import { InjectModel } from '@nestjs/mongoose';
// import { Task } from './task.schema';
// import { Model, UpdateWriteOpResult } from 'mongoose';
// import { Injectable } from '@nestjs/common';
// import { GetTaskDto } from './dto/GetTask.dto';
// import { CreateTaskDto } from './dto/CreateTask.dto';
// import { UpdateTaskDto } from './dto/UpdateTask.dto';

// @Injectable()
// export class TaskRepository {
//   constructor(
//     @InjectModel(Task.name)
//     private readonly taskRepository: Model<Task>,
//   ) {}

//   async findAll(): Promise<GetTaskDto[]> {
//     return await this.taskRepository.find();
//   }

//   async createTask(id: string, task: CreateTaskDto): Promise<CreateTaskDto> {
//     const newTask = { ...task, id };
//     return await this.taskRepository.create(newTask);
//   }

//   async updateTask(
//     id: string,
//     task: UpdateTaskDto,
//   ): Promise<UpdateWriteOpResult> {
//     return await this.taskRepository.updateOne({ id: id }, { $set: task });
//   }

//   async deleteTask(id: string): Promise<{ message: string }> {
//     await this.taskRepository.deleteOne({ id: id });
//     return { message: 'Task deleted successfully' };
//   }

//   async login(id: string, task: any): Promise<any> {
//     await this.taskRepository.updateOne({ id: id }, { $set: task });
//   }
// }
