import { InjectRepository } from '@nestjs/typeorm';
import { TaskEntity } from './task.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

export class TaskRepository {
  constructor(
    @InjectRepository(TaskEntity)
    private readonly taskRepository: Repository<TaskEntity>,
  ) {}

  async findAll(): Promise<TaskEntity[]> {
    return await this.taskRepository.find();
  }

  async createTask(task: TaskEntity): Promise<TaskEntity> {
    return await this.taskRepository.save(task);
  }

  async updateTask(id: string, task: TaskEntity): Promise<UpdateResult> {
    return await this.taskRepository.update(id, task);
  }

  async deleteTask(id: string): Promise<DeleteResult> {
    return await this.taskRepository.delete(id);
  }
}
