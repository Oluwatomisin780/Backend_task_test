import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { PrismaModule } from '../prisma/prisma.module';
import { JwtStrategy } from '../strategy/jwt-auth.strategy';

@Module({
  exports: [UserService],
  imports: [PrismaModule],
  providers: [UserResolver, UserService, JwtStrategy],
})
export class UserModule {}
