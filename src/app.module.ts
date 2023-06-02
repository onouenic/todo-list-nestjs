import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskModule } from './task/task.module';
// import { ConfigModule } from '@nestjs/config';
// import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '0.0.0.0',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_tasks',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: false,
      logging: true,
    }),
    TaskModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

// TypeOrmModule.forRoot({
//  type: 'mongodb',
//  url: process.env.MONGO_URL,
//  entities: ['dist/**/*.entity{.ts,.js}'],
//  synchronize: false,
//  logging: true,
//  useNewUrlParser: true,

// MongooseModule.forRoot('mongodb://root:root@0.0.0.0:27017/tasklist'),
//     ConfigModule.forRoot(),
//     TaskModule,
