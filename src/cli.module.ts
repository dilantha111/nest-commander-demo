import { Module } from '@nestjs/common';
import { HelloCommand } from './hello.command';
import { AppService } from './app.service';

@Module({
  providers: [HelloCommand, AppService],
})
export class CliModule {}
