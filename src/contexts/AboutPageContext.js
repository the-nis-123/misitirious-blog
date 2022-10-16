import { createContext, useState } from 'react';

export const AboutContext = createContext();

const AboutPageContext = ({children}) => {
  return (
    <AboutContext.Provider value={{}}>
      {children}
    </AboutContext.Provider>
  )
}

export default AboutPageContext;