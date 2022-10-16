import { createContext, useState } from 'react';

export const ProductsContext = createContext();

const ProductsPageContext = ({children}) => {
  return (
    <ProductsContext.Provider value={{}}>
      {children}
    </ProductsContext.Provider>
  )
}

export default ProductsPageContext