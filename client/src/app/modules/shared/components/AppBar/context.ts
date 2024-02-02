import { createSafeContext } from '../../../../../core/helpers/context';

interface IContextValue {
  isOpen: boolean;
  toggleOpen: () => void;
}

export const AppBarContext = createSafeContext<IContextValue>();
