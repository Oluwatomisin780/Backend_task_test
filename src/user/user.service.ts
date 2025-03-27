import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}
  async create(createUserInput: CreateUserInput) {
    const user = await this.findOne(createUserInput.email);
    if (user)
      throw new BadRequestException(`user with ${user.email} already exist`);
    const hashpassword = await bcrypt.hash(createUserInput.password, 12);
    const hashbio = await bcrypt.hash(createUserInput.biometricKey, 12);
    return await this.prismaService.user.create({
      data: {
        ...createUserInput,
        biometricKey: hashbio,
        password: hashpassword,
      },
    });
  }

  findOne(email: string) {
    return this.prismaService.user.findUnique({
      where: {
        email,
      },
    });
  }

  async findByBiometric(biometricKey: string) {
    const users = await this.prismaService.user.findMany({
      where: {
        biometricKey: {
          not: null,
        },
      },
    });

    for (const user of users) {
      const validBiometric = await bcrypt.compare(
        biometricKey,
        user.biometricKey,
      );
      if (validBiometric) {
        return user;
      }
    }
    throw new BadRequestException('Invalid biometric data');
  }
}
