import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { UserResponseBody } from '@shared/core';

import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async findOne(where: Prisma.UserWhereUniqueInput): Promise<User | null> {
    return this.prisma.user.findUnique({ where });
  }

  async create(data: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({ data });
  }

  async update(where: Prisma.UserWhereUniqueInput, data: Prisma.UserUpdateInput): Promise<User> {
    return this.prisma.user.update({ where, data });
  }

  async delete(where: Prisma.UserWhereUniqueInput): Promise<User> {
    return this.prisma.user.delete({ where });
  }

  private _createResponse(user: User) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...response } = user;
    return response;
  }

  async getUser(id: string): Promise<UserResponseBody> {
    try {
      const user = await this.findOne({ id });
      if (!user) {
        throw new NotFoundException();
      }
      return this._createResponse(user);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async updateUser(id: string, data: Prisma.UserUpdateInput): Promise<UserResponseBody> {
    try {
      const user = await this.update({ id }, data);
      return this._createResponse(user);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
