import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';

import { UserService } from './user.service';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('profile')
  @UseGuards(JwtAuthGuard)
  getProfile(@Request() req: { user: User }) {
    return this.userService.findOne({ id: req.user.id });
  }
}
