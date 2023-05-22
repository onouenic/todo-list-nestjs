import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskEntity } from './task.entity';
import { DeleteResult, UpdateResult } from 'typeorm';
import { TaskRepository } from './task.repository';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(TaskEntity)
    private readonly taskRepository: TaskRepository,
  ) {}

  async findAll(): Promise<TaskEntity[]> {
    return await this.taskRepository.findAll();
  }

  async createTask(task: TaskEntity): Promise<TaskEntity> {
    return await this.taskRepository.createTask(task);
  }

  async updateTask(id: string, task: TaskEntity): Promise<UpdateResult> {
    return await this.taskRepository.updateTask(id, task);
  }

  async deleteTask(id: string): Promise<DeleteResult> {
    return await this.taskRepository.deleteTask(id);
  }
}
