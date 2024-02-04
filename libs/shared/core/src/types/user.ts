import { User } from '@prisma/client';

export type UserResponseBody = Omit<User, 'password'>;
export type UserUpdateRequestBody = Partial<Omit<User, 'id' | 'email' | 'password'>>;
