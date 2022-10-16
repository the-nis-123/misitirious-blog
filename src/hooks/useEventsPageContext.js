import { useContext } from 'react';
import { EventsContext } from '../contexts/EventsPageContext';

const useEventsPageContext = () => {
  return useContext(EventsContext);
}

export default useEventsPageContext