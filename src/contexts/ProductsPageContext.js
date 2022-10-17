import { createContext } from 'react';
import useFetch from '../hooks/useFetch';

export const ProductsContext = createContext();

const ProductsPageContext = ({ children }) => {
  const productsArticles = useFetch('/products');
  
  return (
    <ProductsContext.Provider value={{ productsArticles }}>
      {children}
    </ProductsContext.Provider>
  )
}

export default ProductsPageContext