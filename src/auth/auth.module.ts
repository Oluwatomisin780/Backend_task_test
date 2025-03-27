import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { UserModule } from '../user/user.module';
import { JwtModule, JwtService } from '@nestjs/jwt';

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      signOptions: {
        expiresIn: '1h',
      },
      secret: 'some-secret',
    }),
  ],
  providers: [AuthResolver, AuthService],
})
export class AuthModule {}
