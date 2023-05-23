import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://root:root@0.0.0.0:27017/tasklist'),
    ConfigModule.forRoot(),
    TaskModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

//TypeOrmModule.forRoot({
//  type: 'mongodb',
//  url: process.env.MONGO_URL,
//  entities: ['dist/**/*.entity{.ts,.js}'],
//  synchronize: false,
//  logging: true,
//  useNewUrlParser: true,
