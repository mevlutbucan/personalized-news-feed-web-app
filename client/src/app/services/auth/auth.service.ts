import axios from 'axios';
import { SignInFieldValues, SignUpFieldValues } from '@shared/core';

export class AuthService {
  static create() {
    return new AuthService();
  }

  async signin(data: SignInFieldValues) {
    return axios.post('/api/auth/signin', data);
  }

  async signup(data: SignUpFieldValues) {
    return axios.post('/api/auth/signup', data);
  }
}
