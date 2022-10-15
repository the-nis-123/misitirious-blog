import styled from "styled-components";
import FooterBlock from "../components/FooterBlock";
import Hero from "../components/Hero";
import QuickAccess from "../components/QuickAccess";
import TestimonyBlock from "../components/TestimonyBlock";
import EventsBlock from "../components/EVentsBlock";
import PartnersBlock from "../components/PartnersBlock";
import ProductsBlock from "../components/ProductsBlock";
import PosterBlock from "../components/PosterBlock";

import image1 from '../images/556.jpg';
import image2 from '../images/557.jpg';
import image6 from '../images/112.png';



function Cart() {
  return (
    <>
      <Wrapper>
        <Hero />
        <QuickAccess />
        <PosterBlock  image={image6}/>
        <ProductsBlock image1={image1} image2={image2} />
        <EventsBlock />
        <PartnersBlock />
        <TestimonyBlock />
      </Wrapper>
      <FooterBlock />
    </>
  )
}

export default Cart;

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
  'header header header header header header'
  'quick quick quick quick quick quick'
  'poster poster poster poster poster poster'
  'services services services services services services'
  'main main main main main main'
  'partners partners partners partners partners partners'
  'left left menu menu menu menu'
  'footer footer footer footer footer footer';

  gap: 20px;
`