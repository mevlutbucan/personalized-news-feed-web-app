import { AuthService } from './auth/auth.service';
import { NewsService } from './news/news.service';
import { UserService } from './user/user.service';

export const authService = AuthService.create();
export const userService = UserService.create();
export const newsService = NewsService.create();
