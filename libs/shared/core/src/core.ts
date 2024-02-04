export { SignInSchema } from './schemas/auth/signin';
export { SignUpSchema } from './schemas/auth/signup';

export type { AuthResponseBody, SignInFieldValues, SignUpFieldValues } from './types/auth';
export type { UserResponseBody, UserUpdateRequestBody } from './types/user';

export const SECTIONS = {
  Sport: 'sport',
  'Art & Design': 'artanddesign',
  Music: 'music',
  Books: 'books',
  Movies: 'film',
  Games: 'games',
  Technology: 'technology',
  Travel: 'travel',
  Fashion: 'fashion',
  Food: 'food',
};

export type Section = keyof typeof SECTIONS;
