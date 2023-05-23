import { Injectable } from '@nestjs/common';
import { TaskRepository } from './task.repository';
import { Task } from './task.schema';
import { UpdateWriteOpResult } from 'mongoose';
import { GetTaskDto } from './dto/GetTask.dto';
import { CreateTaskDto } from './dto/CreateTask.dto';

@Injectable()
export class TaskService {
  constructor(private readonly taskRepository: TaskRepository) {}

  async findAll(): Promise<GetTaskDto[]> {
    return await this.taskRepository.findAll();
  }

  async createTask(task: CreateTaskDto): Promise<CreateTaskDto> {
    const tasks = await this.taskRepository.findAll();
    const id = tasks.length + 1;
    return await this.taskRepository.createTask(id, task);
  }

  async updateTask(id: string, task: Task): Promise<UpdateWriteOpResult> {
    return await this.taskRepository.updateTask(id, task);
  }

  async deleteTask(id: string): Promise<{ message: string }> {
    return await this.taskRepository.deleteTask(id);
  }
}
