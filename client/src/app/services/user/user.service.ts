import axios from 'axios';
import { UserResponseBody, UserUpdateRequestBody } from '@shared/core';

export class UserService {
  static create() {
    return new UserService();
  }

  async currentUser(accessToken: string) {
    return axios.get<UserResponseBody>('/api/user', { headers: { Authorization: 'Bearer ' + accessToken } });
  }

  async updateUser(accessToken: string, data: UserUpdateRequestBody) {
    return axios.put<UserResponseBody>('/api/user', data, { headers: { Authorization: 'Bearer ' + accessToken } });
  }
}
