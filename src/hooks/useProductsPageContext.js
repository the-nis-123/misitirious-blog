import { useContext } from 'react';
import { ProductsContext } from '../contexts/ProductsPageContext';


const useProductsPageContext = () => {
  return useContext(ProductsContext);
}

export default useProductsPageContext