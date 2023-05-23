import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './task.schema';
import { CreateTaskDto } from './dto/CreateTask.dto';
import { Response } from 'express';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  async findAll(@Res() res: Response) {
    try {
      const tasks = await this.taskService.findAll();
      return res.status(HttpStatus.OK).json(tasks);
    } catch (error) {
      console.log(error);
    }
  }

  @Post()
  async createTask(@Res() res: Response, @Body() task: CreateTaskDto) {
    try {
      const newTask = await this.taskService.createTask(task);
      return res.status(HttpStatus.CREATED).json(newTask);
    } catch (error) {
      console.log(error);
    }
  }

  @Put('/:id')
  async updateTask(
    @Res() res: Response,
    @Param('id') id: string,
    @Body() task: Task,
  ) {
    const updateTask = await this.taskService.updateTask(id, task);
    return res.status(HttpStatus.OK).json(updateTask);
  }

  @Delete('/:id')
  async deleteTask(@Res() res: Response, @Param('id') id: string) {
    const deleteTask = await this.taskService.deleteTask(id);
    return res.status(HttpStatus.OK).json(deleteTask);
  }
}
