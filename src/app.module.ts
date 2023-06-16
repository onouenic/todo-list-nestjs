import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskModule } from './task/task.module';
// import { ConfigModule } from '@nestjs/config';
// import { MongooseModule } from '@nestjs/mongoose';

// SUBSTITUIR OS VALORES PARA CONFIGURAR O ACESSO AO BANCO PELO TYPEORM

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: host,
      port: port,
      username: username,
      password: password,
      database: dbname,
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
