import styled from "styled-components";
import useDummyText from '../hooks/useDummyText';
import image from '../images/862.jpg';

const PosterBlock = () => {
  const paragraphA = useDummyText(4);
  const paragraphB = useDummyText(3);

  return (
    <Wrapper style={{ backgroundImage: `url(${image})` }} >
      <Overlay />
      <section>
        <h2>Misitirious Essentials</h2>
        <p>{paragraphA}</p>
      </section>

      <section>
        <h2>Music, Wines and Fashion</h2>
        <p>{paragraphB}</p>
      </section>
    </Wrapper>
  )
}

export default PosterBlock;

const Wrapper = styled.section`
  grid-area: poster;
  padding: 1em 0;
  background-color: black;
  gap: 3em;
  height: auto;
  background-size: cover;
  background-repeat:no-repeat;
  background-position: center;
  position: relative;
  font-family: 'Noto Sans Vai', sans-serif;
  

  @media only screen and (min-width: 720px)  {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2em;
  }

  section{
    flex: 50%;
    z-index: 2;
    padding: 0 1em;
    max-height: 60vh;
    overflow: hidden;    

    h2{
      margin-bottom: 10px;
      color: #0a0e59;
    }
  }
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  opacity: 0.6;
  background-color: white;
  z-index:1;
`
