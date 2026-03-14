import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { User } from '../models/user.model';
import { mockUsers } from '../../__mocks__/users.mock';

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

  @Query(() => User, { nullable: true, name: 'userByUUID' })
  getUserByUUID(@Args('id', { type: () => Int }) id: number) {
    return mockUsers.find((user) => user.id === id);
  }
}
