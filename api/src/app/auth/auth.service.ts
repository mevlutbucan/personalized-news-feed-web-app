import { BadRequestException, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import type { User } from '@prisma/client';
import { AuthResponseBody, SignInFieldValues, SignUpFieldValues } from '@shared/core';

import { UserService } from '../user/user.service';

import { comparePassword, encryptPassword } from './utils/crypto';

@Injectable()
export class AuthService {
  constructor(private userService: UserService, private jwtService: JwtService) {}

  private async _validateUser(email: string, password: string) {
    const user = await this.userService.findOne({ email });
    if (!user) {
      throw new Error('Invalid email');
    } else if (!(await comparePassword(password, user.password))) {
      throw new Error('Invalid password');
    }
    return user;
  }

  private _createResponse(user: User): AuthResponseBody {
    const payload = { sub: user.id, email: user.email };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }

  async signin(data: SignInFieldValues) {
    try {
      const user = await this._validateUser(data.email, data.password);
      return this._createResponse(user);
    } catch (error) {
      throw new UnauthorizedException(error);
    }
  }

  async signup(data: SignUpFieldValues) {
    data.password = await encryptPassword(data.password);
    try {
      const user = await this.userService.create(data);
      return this._createResponse(user);
    } catch (error) {
      if (error.code === 'P2002') {
        throw new BadRequestException('Email is already used.');
      }
      throw new InternalServerErrorException(error);
    }
  }
}
