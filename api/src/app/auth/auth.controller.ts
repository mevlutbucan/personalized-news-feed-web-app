import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import type { User } from '@prisma/client';

import { LocalAuthGuard } from './local-auth.guard';

import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req: { user: User }) {
    return this.authService.login(req.user);
  }
}
