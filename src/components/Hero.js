import styled from "styled-components";

import SideBarIcons from "./SideBarIcons";
import { RoundedButton, RoundButtonWhite } from "./Button";

const HeroSlider = () => {
  const image = 'https://img.freepik.com/free-photo/pink-handbags_1203-7710.jpg?w=826&t=st=1667506331~exp=1667506931~hmac=16216d55ed0af3e098ac3204e8ae7bb1f70e3f5ace368bb941fb08467e5736ff'
  return (
  <Slider>
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
  display: flex;
  align-items: center;
  background-color: white;
  padding: 0 2em;
`

const Image = styled.div`
  width: 60%;
  height: 100%;

  img{
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

const Hero = styled.div`
  width: calc(100% - 4em);
  display:flex;
  justify-content:  center;
  align-items: center;
  background-color: inherit;
  padding: 2em 0 2em 5em;
  text-align: center;

  @media only screen and (min-width: 720px)  {
    text-align: left;
    justify-content:  space-between;
  }
  
  .buttons{
    display:flex;
    justify-content:center;

    @media only screen and (min-width: 720px)  {
      justify-content:flex-start;
    }
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
 }

 section{
  display: flex;
  gap: 30px;
  margin-top: 25px;
 }
`
