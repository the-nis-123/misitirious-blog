import { createContext } from 'react';
import useFetch from '../hooks/useFetch';

export const HomeContext = createContext();

const HomePageContext = ({ children }) => {
  const eventsArticles = useFetch('/events');
  const comments = useFetch('/comments');
  
  return (
    <HomeContext.Provider value={{}}>
      {children}
    </HomeContext.Provider>
  )
}

export default HomePageContext;