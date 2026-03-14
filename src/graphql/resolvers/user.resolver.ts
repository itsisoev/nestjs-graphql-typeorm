import { Query, Resolver } from '@nestjs/graphql';
import { User } from '../models/user.model';

@Resolver()
export class UserResolver {
  @Query(() => User)
  getUser() {
    return {
      id: 1,
      username: 'bob',
      displayName: 'Bob',
    };
  }
}
