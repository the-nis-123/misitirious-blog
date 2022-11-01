import styled from "styled-components";
import FooterBlock from "../components/Footer";
import Hero from "../components/Hero";
import QuickAccess from "../components/QuickAccess";
import TestimonyBlock from "../components/TestimonyBlock";
import EventsBlock from "../components/EVentsBlock";
import PartnersBlock from "../components/PartnersBlock";
import { LandingPageWidget } from "../components/PostWidget";
import PosterBlock from "../components/PosterBlock";
import useHomeContext from '../hooks/useAppContext';

import image6 from '../images/862.jpg';


function Cart() {
  const {events} = useHomeContext();

  return (
    <>
      <Wrapper>
        <Hero />
        <QuickAccess />
        <PosterBlock  image={image6}/>
        <LandingPageWidget data={events} />
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
  'testify testify testify testify testify testify';

  gap: 20px;
`