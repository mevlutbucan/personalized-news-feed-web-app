import axios from 'axios';

export class UserService {
  static create() {
    return new UserService();
  }

  async currentUser(accessToken: string) {
    return axios.get('/api/user/profile', { headers: { Authorization: 'Bearer ' + accessToken } });
  }
}
