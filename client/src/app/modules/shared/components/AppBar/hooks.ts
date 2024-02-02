import { useSafeContext } from '../../../../../core/helpers/context';
import { AppBarContext } from './context';

export const useAppBarContext = () => useSafeContext(AppBarContext);
