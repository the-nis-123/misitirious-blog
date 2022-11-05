import { createContext } from 'react';
import useFetch from '../hooks/useFetch';

export const AppContext = createContext();

const ContextWrapper = ({ children }) => {
  const events = useFetch('events.json');
  const gallery = useFetch('gallery.json');
  const comments = useFetch('users.json');
  const hero = useFetch('hero.json');

  
  return (
    <AppContext.Provider value={{
      comments,
      events,
      gallery,
      hero
    }}>
      {children}
    </AppContext.Provider>
  )
}

export default ContextWrapper;