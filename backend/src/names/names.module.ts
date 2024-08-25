/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NamesController } from './names.controller';
import { NamesService } from './names.service';
import { Name } from './name.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Name]),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'example',
      database: 'names',
      entities: [Name],
      synchronize: true, // Use `true` for development; set to `false` in production
    }),
  ],
  controllers: [NamesController],
  providers: [NamesService],
})
export class NamesModule {}
