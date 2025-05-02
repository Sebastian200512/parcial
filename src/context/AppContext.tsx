import React, { createContext, useState, ReactNode } from 'react';

interface AppContextProps {
  sharedData: string;
  setSharedData: (data: string) => void;
}

export const AppContext = createContext<AppContextProps>({
  sharedData: '',
  setSharedData: () => {},
});

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [sharedData, setSharedData] = useState<string>('');

  return (
    <AppContext.Provider value={{ sharedData, setSharedData }}>
      {children}
    </AppContext.Provider>
  );
};
