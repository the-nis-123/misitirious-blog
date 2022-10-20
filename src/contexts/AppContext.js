import { createContext } from 'react';
import useFetch from '../hooks/useFetch';

export const AppContext = createContext();

const ContextWrapper = ({ children }) => {
  const events = useFetch('/events');
  const gallery = useFetch('/gallery');
  const comments = useFetch('/comments');
  
  return (
    <AppContext.Provider value={{
      comments,
      events,
      gallery
    }}>
      {children}
    </AppContext.Provider>
  )
}

export default ContextWrapper;