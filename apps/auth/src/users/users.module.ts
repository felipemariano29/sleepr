import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { DatabaseModule, LoggerModule } from '@app/common';
import { UserDocument, UserSchema } from '@app/common';
import { UsersRepository } from './users.repository';
import { LocalStrategy } from 'apps/auth/strategies/local.strategy';

@Module({
  imports: [DatabaseModule, DatabaseModule.forFeature([{ name: UserDocument.name, schema: UserSchema }]), LoggerModule],
  controllers: [UsersController],
  providers: [UsersService, UsersRepository, LocalStrategy],
  exports: [UsersService],
})
export class UsersModule {}
