import { AuthService } from './auth/auth.service';
import { UserService } from './user/user.service';

export const authService = AuthService.create();
export const userService = UserService.create();
