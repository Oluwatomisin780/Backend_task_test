import { Field } from '@nestjs/graphql';

export class LoginAuthInput {
  @Field(() => String)
  email: string;
  @Field(() => String)
  password: string;
}

export class BiometricAuthInput {
  @Field(() => String)
  biometricKey: string;
}
