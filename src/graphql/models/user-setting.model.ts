import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserSetting {
  @Field(() => Int)
  userId: number;

  @Field({ defaultValue: false })
  receiveNotification: boolean;

  @Field({ defaultValue: false })
  receiveEmail: boolean;
}


// TODO: uuid -> change userId from Int to userUUID
