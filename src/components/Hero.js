import styled from "styled-components";

import image from '../images/5.png';
import SideBarIcons from "./SideBarIcons";
import { RoundedButton, RoundButtonWhite } from "./Button";

const HeroSlider = () => {
  return (
  <Slider style={{backgroundImage: `url(${image})`}}>
    <Overlay />    
    <SideBarIcons />

    <Hero>
      <Section>
        <h4>unmatched quality</h4>
          <h1>Elegant, Slick,<br/> and Trending</h1>
          <p>
            Every day and all year round walk out of your
            door feeling like <br /> that King, that Queen you were always meant to be.
            <br/> You can't get it wrong with MISITIRIOUS
          </p>  
          <section className="buttons">
            <RoundedButton to='/'>Order Now</RoundedButton>

            <RoundButtonWhite to='/about'>
              About Us
            </RoundButtonWhite>
          </section>
      </Section>
        
      <Image src={image} alt='' className="hide-on-small-screens"/>
    </Hero>
  </Slider>
  )
}

export default HeroSlider;


const Slider = styled.div`
  grid-area: header;
  display:flex;
  align-items: center;
  padding: 0 30px;
  position: relative;
`

const Image = styled.img`
  height: 100%;
`

const Hero = styled.div`
  background-color: inherit;
  position: relative;
  padding: 20px;

  .buttons{
    display:flex;
    justify-content:center;
  }
`

const Section = styled.section`
 h1{
  font-size: 4em;
  margin:10px 0;
  font-family: 'Lobster Two';
 }

 h4{
  color: purple;
  text-transform:uppercase;
  text-align: center;
 }

 section{
  display: flex;
  gap: 30px;
  margin-top: 25px;
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
`
