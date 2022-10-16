import { useContext } from 'react';
import { AboutContext } from '../contexts/AboutPageContext';

const useAboutPageContext = () => {
  return useContext(AboutContext);
}

export default useAboutPageContext