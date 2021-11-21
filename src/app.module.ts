import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { APIModule } from './api/api.module';

@Module({
  imports: [
    APIModule,
    RouterModule.register([
      {
        path: '',
        module: APIModule,
      },
    ]),
  ] 
})

export class AppModule {}