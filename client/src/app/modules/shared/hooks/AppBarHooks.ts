import { useSafeContext } from '../../../../core/helpers/context';
import { AppBarContext } from '../contexts/AppBarContext';

export const useAppBarContext = () => useSafeContext(AppBarContext);
