import { createContext } from 'react';
import useFetch from '../hooks/useFetch';

export const AboutContext = createContext();

const AboutPageContext = ({ children }) => {
  
  const aboutUsArticles = useFetch('/abot');

  return (
    <AboutContext.Provider value={{ aboutUsArticles }}>
      {children}
    </AboutContext.Provider>
  )
}

export default AboutPageContext;