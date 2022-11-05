import styled from "styled-components";

import SideBarIcons from "./SideBarIcons";
import { RoundedButton, RoundButtonWhite } from "./Button";

const HeroSlider = () => {
  const image = 'https://img.freepik.com/free-photo/background-shoes-pair-men-red_1203-6407.jpg?t=st=1667506232~exp=1667506832~hmac=de22aef39e11b08d483d122c0114ada4c19e1e88abca866c9fadca7705034a1e'
  return (
  <Slider>
    <SideBarIcons />

    <Hero>
      <Section>
        <section>
          <h4>unmatched quality</h4>
          <h1>Elegant, Slick,<br/> and Trending</h1>
          <p>
            Every day and all year round walk out of your
            door feeling like <br /> that King, that Queen you were always meant to be.
            <br/> You can't get it wrong with MISITIRIOUS
          </p> 
        </section> 

        <section className="buttons">
          <RoundedButton to='/'>Order Now</RoundedButton>

          <RoundButtonWhite to='/about'>
            About Us
          </RoundButtonWhite>
        </section>
      </Section>


      <Image>
        <img src={image} alt='' />
      </Image>
    </Hero>
  </Slider>
  )
}

export default HeroSlider;


const Slider = styled.div`
  width: 100%;
  position: relative;
  height: 50vh;
  background-color: white;


  @media only screen and (min-width: 720px)  {
    display: flex;
    align-items: center;
    height: auto;
    min-height: 60vh;
  }
  
`

const Image = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;

  @media only screen and (min-width: 720px)  {
    position: unset;
    flex: 50%;
  }

  img{
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }
`

const Hero = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  @media only screen and (min-width: 720px)  {
    text-align: left;
    justify-content:  space-between;
    display:flex;
    align-items: center;
    padding: 2em;
  }


  @media only screen and (min-width: 1000px)  {
    width: calc(100% - 4em);
  }
  
  .buttons{
    display:flex;
    justify-content:center;
    gap: 2em;

    @media only screen and (min-width: 720px)  {
      justify-content:flex-start;
      padding: 2em 0;
    }
  }
`

const Section = styled.section`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: 2;
  text-align: center;
  padding: 2em 1em;
  display: flex;
  flex-flow: column;
  justify-content: space-between;

  @media only screen and (min-width: 720px)  {
    padding: 0 1em;
    text-align: left;
    position: unset;
    flex: 50%;
  }


  @media only screen and (min-width: 1000px)  {
    display: block;
  }

  h1{
      display: none;
      @media only screen and (min-width: 1000px)  {
        font-size: 4em;
        font-family: 'Lobster Two';
        display: block;
      }
    }

  h4{
    color: purple;
    text-transform:uppercase;
    padding: 1em 0;
    
    @media only screen and (min-width: 1000px)  {
      padding: 0;
    }
  }
`
