import { createContext } from 'react';
import useFetch from '../hooks/useFetch';

export const EventsContext = createContext();

const EventsPageContext = ({ children }) => {
  const eventsArticles = useFetch('/events');
  
  return (
    <EventsContext.Provider value={{ eventsArticles }}>
      {children}
    </EventsContext.Provider>
  )
}

export default EventsPageContext;