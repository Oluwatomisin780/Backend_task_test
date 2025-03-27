import { InputType, Field } from '@nestjs/graphql';

export class CreateUserInput {
  @Field(() => String)
  email: string;
  @Field(() => String)
  password: string;
  @Field(() => String, { nullable: true })
  biometricKey?: string;
}
