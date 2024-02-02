import axios from 'axios';
import type { AuthResponseBody, SignInFieldValues, SignUpFieldValues } from '@shared/core';

export class AuthService {
  static create() {
    return new AuthService();
  }

  async signin(data: SignInFieldValues) {
    return axios.post<AuthResponseBody>('/api/auth/signin', data);
  }

  async signup(data: SignUpFieldValues) {
    return axios.post<AuthResponseBody>('/api/auth/signup', data);
  }
}
