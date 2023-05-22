import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskEntity } from './task.entity';
import { DeleteResult, UpdateResult } from 'typeorm';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  async findAll(): Promise<TaskEntity[]> {
    return await this.taskService.findAll();
  }

  @Post()
  async createTask(task: TaskEntity): Promise<TaskEntity> {
    return await this.taskService.createTask(task);
  }

  @Put('/:id')
  async updateTask(
    @Param('id') id: string,
    task: TaskEntity,
  ): Promise<UpdateResult> {
    return await this.taskService.updateTask(id, task);
  }

  @Delete('/:id')
  async deleteTask(@Param('id') id: string): Promise<DeleteResult> {
    return await this.taskService.deleteTask(id);
  }
}
