import styled from "styled-components";

import Product from "./Product";

const ProductsBlock = ({image1, image2}) => {
  return (
    <Wrapper>
      <Product image={image2} name='Beauty, Fragrance reading'/>
      <Product image={image1} name='Apparrel simplified to improve'/>
    </Wrapper>
  )
}

export default ProductsBlock;

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(2,1fr);
  grid-area: services;
  padding: 20px 30px;
  background-color: white;
  gap: 20px;
   
  @media screen and (max-width: 960px) {
    max-width: 100vw;
    grid-template-columns: 1fr;
  }
`
