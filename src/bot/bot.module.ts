import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { BotService } from './bot.service';
import { BotProvider } from './bot.provider';

@Module({
  imports: [HttpModule],
  providers: [BotService, BotProvider],
  exports: [BotService],
})
export class BotModule {}
