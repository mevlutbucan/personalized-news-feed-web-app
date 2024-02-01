import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { SignInFieldValues, SignInSchema, SignUpFieldValues, SignUpSchema } from '@shared/core';

import { AuthService } from './auth.service';

import { YupValidationPipe } from './pipes/yup-validation.pipe';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signin')
  @UsePipes(new YupValidationPipe(SignInSchema))
  async signin(@Body() data: SignInFieldValues) {
    return this.authService.signin(data);
  }

  @Post('signup')
  @UsePipes(new YupValidationPipe(SignUpSchema))
  async signup(@Body() data: SignUpFieldValues) {
    return this.authService.signup(data);
  }
}
