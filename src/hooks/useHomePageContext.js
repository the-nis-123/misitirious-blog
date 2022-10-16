import { useContext } from 'react';
import { HomeContext } from '../contexts/HomePageContext';


const useHomePageContext = () => {
  return useContext(HomeContext);
}

export default useHomePageContext