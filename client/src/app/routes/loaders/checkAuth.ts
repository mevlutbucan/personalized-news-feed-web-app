import { redirect } from 'react-router-dom';

import { userService } from '../../services';
import store from '../../services/redux/store';
import { changeAuthState, signOut } from '../../services/redux/auth/actions';
import { changeUserState } from '../../services/redux/user/actions';

import { Paths } from '../../../core/enums/Paths';

export async function checkAuth() {
  const accessToken = localStorage.getItem('access_token');
  if (!accessToken) {
    return redirect(Paths.SignIn);
  }
  try {
    const response = await userService.currentUser(accessToken);
    store.dispatch(changeAuthState({ accessToken }));
    store.dispatch(changeUserState(response.data));
    return null;
  } catch (error) {
    store.dispatch(signOut());
    return redirect(Paths.SignIn);
  }
}
