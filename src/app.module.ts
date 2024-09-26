import { Module } from '@nestjs/common';
import { BotModule } from './bot/bot.module';
import { UpdatesModule } from './updates/updates.module';
import { ConfigModule } from '@nestjs/config';
import config from './configuration/config';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true, load: [config] }), BotModule, UpdatesModule],
})
export class AppModule {}
