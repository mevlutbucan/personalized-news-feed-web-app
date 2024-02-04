import { redirect } from 'react-router-dom';

import { checkAuth } from './checkAuth';

import { Paths } from '../../../core/enums/Paths';

export async function rootLoader() {
  const response = await checkAuth();
  if (!response) {
    return redirect(Paths.News);
  }
  return response;
}
