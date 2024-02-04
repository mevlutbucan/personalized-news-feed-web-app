import { Body, Controller, Get, Put, Request, UseGuards } from '@nestjs/common';
import { UserUpdateRequestBody } from '@shared/core';

import { UserService } from './user.service';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async getUser(@Request() req: { user: { id: string } }) {
    return this.userService.getUser(req.user.id);
  }

  @Put()
  @UseGuards(JwtAuthGuard)
  async updateUser(@Request() req: { user: { id: string } }, @Body() data: UserUpdateRequestBody) {
    return this.userService.updateUser(req.user.id, data);
  }
}
