import { createContext, useState } from 'react';

export const HomeContext = createContext();

const HomePageContext = ({children}) => {
  return (
    <HomeContext.Provider value={{}}>
      {children}
    </HomeContext.Provider>
  )
}

export default HomePageContext;