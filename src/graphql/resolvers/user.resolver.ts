import {
  Args,
  Int,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { User } from '../models/user.model';
import { mockUsers } from '../../__mocks__/users.mock';
import { usersSettingsMock } from '../../__mocks__/users-settings.mock';
import { UserSetting } from '../models/user-setting.model';

@Resolver((of) => User)
export class UserResolver {
  @Query(() => [User])
  getUsers() {
    return mockUsers;
  }

  @Query(() => User, { nullable: true, name: 'userByUUID' })
  getUserByUUID(@Args('id', { type: () => Int }) id: number) {
    return mockUsers.find((user) => user.id === id);
  }

  @ResolveField(() => UserSetting, { name: 'settings' })
  getUserSettings(@Parent() user: User) {
    return usersSettingsMock.find((setting) => setting.userId === user.id);
  }
}
