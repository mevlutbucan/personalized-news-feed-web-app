import { FunctionComponent, PropsWithChildren, useState } from 'react';

import { AppBarContext } from './context';

const DEFAULT_VALUE = false;

const AppBarProvider: FunctionComponent<PropsWithChildren> = function ({ children }) {
  const [isOpen, setOpen] = useState(DEFAULT_VALUE);

  const toggleOpen = () => {
    setOpen(!isOpen);
  };

  const contextValue = { isOpen, toggleOpen };
  return <AppBarContext.Provider value={contextValue}>{children}</AppBarContext.Provider>;
};

export default AppBarProvider;
