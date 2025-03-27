import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { CreateUserInput } from './dto/create-user.input';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../guards/jwt-auth.guard';
import { CurrentUser } from '../decorators/currentUser.decorator';
import { User } from '../graphql';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation('createUser')
  create(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.userService.create(createUserInput);
  }

  @Query('user')
  findOne(@Args('email') email: string) {
    return this.userService.findOne(email);
  }

  @Query(() => User)
  @UseGuards(GqlAuthGuard)
  getMe(@CurrentUser() user: User) {
    return this.userService.findOne(user.email);
  }
}
