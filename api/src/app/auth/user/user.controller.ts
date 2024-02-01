import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';

import { UserService } from './user.service';

import { JwtAuthGuard } from '../jwt-auth.guard';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req: { user: User }) {
    return this.userService.findOne({ id: req.user.id });
  }
}
