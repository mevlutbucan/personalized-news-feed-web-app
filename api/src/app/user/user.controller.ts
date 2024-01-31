import { Controller, Get, Request, UseGuards } from '@nestjs/common';

import { User } from './user.service';

import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('user')
export class UserController {
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req: { user: User }) {
    return req.user;
  }
}
