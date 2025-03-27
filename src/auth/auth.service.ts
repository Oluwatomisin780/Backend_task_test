import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { BiometricAuthInput, LoginAuthInput } from './dto/login-auth.input';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.userService.findOne(email);
    console.log(user);
    const correctPassword = await bcrypt.compare(password, user.password);
    console.log(correctPassword);
    if (user && correctPassword) {
      console.log(user);
      return user;
    }
    return null;
  }

  async login(user: any) {
    console.log(user);
    const payload = {
      email: user.email,
      sub: user.id,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async biometric(biometricAuthInput: BiometricAuthInput) {
    const user = await this.userService.findByBiometric(
      biometricAuthInput.biometricKey,
    );
    const payload = {
      email: user.email,
      sub: user.id,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
