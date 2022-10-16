import { createContext, useState } from 'react';

export const EventsContext = createContext();

const EventsPageContext = ({children}) => {
  return (
    <EventsContext.Provider value={{}}>
      {children}
    </EventsContext.Provider>
  )
}

export default EventsPageContext;