import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { BiometricAuthInput, LoginAuthInput } from './dto/login-auth.input';

@Resolver('Auth')
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation('login')
  async login(@Args('loginAuthInput') loginAuthInput: LoginAuthInput) {
    const user = await this.authService.validateUser(
      loginAuthInput.email,
      loginAuthInput.password,
    );
    return await this.authService.login(user);
  }

  @Mutation('biometric')
  biometric(
    @Args('biometricAuthInput') biometricAuthInput: BiometricAuthInput,
  ) {
    return this.authService.biometric(biometricAuthInput);
  }
}
