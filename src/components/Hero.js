import styled from "styled-components";

import image from '../images/5.png';
import SideBarIcons from "./SideBarIcons";
import { RoundedButton, RoundButtonWhite } from "./Button";

import { TwitterWithCircle } from '@styled-icons/entypo-social/TwitterWithCircle';
import { InstagramWithCircle } from '@styled-icons/entypo-social/InstagramWithCircle';
import { LinkedinWithCircle } from '@styled-icons/entypo-social/LinkedinWithCircle';
import { FacebookWithCircle } from '@styled-icons/entypo-social/FacebookWithCircle';

const HeroSlider = () => {
  return (
  <Slider>
    <Overlay />    
    <SideBarIcons>
      <a href='https://github.com/the-nis-123' target="_blank" rel="noopener noreferrer">{ IconWithStyles(FacebookWithCircle) }</a>
      <a href='https://twitter.com/niscloud_kintu' target="_blank" rel="noopener noreferrer">{ IconWithStyles(TwitterWithCircle) }</a>
      <a href='https://github.com/the-nis-123' target="_blank" rel="noopener noreferrer">{ IconWithStyles(InstagramWithCircle) }</a>
      <a href='https://www.linkedin.com/in/kintu-denis/' target="_blank" rel="noopener noreferrer">{ IconWithStyles(LinkedinWithCircle) }</a>
    </SideBarIcons>

    <Hero>
      <Section>
        <h4>QUALITY UNMATCHED</h4>
          <h1>Elegant, Slick,<br/> and Trending</h1>
          <p>
            Every day and all year round walk out of your
            door feeling like <br /> that King, that Queen you were always meant to be.
            <br/> You can't get it wrong with MISITIRIOUS
          </p>  
          <section>
            <RoundedButton to='/'>Order Now</RoundedButton>

            <RoundButtonWhite to='/about'>
              About Us
            </RoundButtonWhite>
          </section>
      </Section>
        
      <Image src={image} alt='' />
    </Hero>
  </Slider>
  )
}

export default HeroSlider;


const IconWithStyles = ( Icon ) => {
  return (
    <Icon size='25px' style={{color:'#594e47'}} />
  )
}


const Slider = styled.div`
  grid-area: header;
  background-color: inherit;
  display:flex;
  padding: 0 30px;
  position: relative;

  @media screen and (max-width: 960px) {
    max-width: 100vw;
  }
`

const Image = styled.img`
  height: 100%;

  @media screen and (max-width: 960px) {
    margin: 0 auto;
    width: 100%;
    height: auto;
  }
`

const Hero = styled.div`
  width: calc(100% - 60px);
  height: 60vh;
  background-color: inherit;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
  
  @media screen and (max-width: 960px) {
    width: 100%;
    flex-flow: column;
    text-align:center;
  }
`

const Section = styled.section`
   @media screen and (max-width: 960px) {
    width: 100%;
    padding: 20px 0;
    position: absolute;
    top:0;
    z-index: 2;
  }

 h1{
  font-size: 3em;
  margin:10px 0;
 }

 h4{
  color: purple;
 }

 section{
  display: flex;
  gap: 30px;
  margin-top: 25px;

  @media screen and (max-width: 960px) {
    justify-content: center;
  }
 }
`


const Overlay = styled.section`
  position: absolute;
  top: 0;
  left:0;
  height: 100%;
  width: 100%;
  opacity: 0.4;
  background-color: darkgray;
  z-index:1;
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
  }
`
