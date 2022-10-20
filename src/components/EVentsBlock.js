import styled from "styled-components";
import image1 from '../images/911.jpg';
import image2 from '../images/753.jpg';
import image3 from '../images/557.jpg';
import image4 from '../images/9453.jpg';

import useHomeContext from '../hooks/useAppContext';
import useDummyText from '../hooks/useDummyText';

import Event from "./Event";

const EventsBlock = () => {
  const {events} = useHomeContext();
  console.log(events);

  return (
    <Wrapper>
      <h2>Events you wouldn't want to miss</h2>
      <Events>
        <Card>
          <Overlay />
          <Video autoPlay muted loop>
            <source src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/rWFRtEk4Ejrjb627h/videoblocks-3324z_catwhdgroup110_rrkw06mzq__319d20e55a4f4ac2b3e1cc8dfcde2b7c__P360.mp4" type="video/mp4" />
          </Video>
        </Card>

        <Card>
          <Event name='MISITIRIOUS ESSENTIALS' image={image1} />
          <Event name='THE RUNWAY' image={image2}/>
          <Event name='MUSIC, WINES and FASHION' image={image3}/>
          <Event name='ANNUAL FASHION GALA' image={image4} />
        </Card>
      </Events>
    </Wrapper>
    
  )
}

export default EventsBlock;


const Wrapper = styled.div`
  grid-area: main;
  background-color: inherit;
  padding: 0 30px;

  h2{
    padding: 10px 0;
  }
`

const Events = styled.div`
  display: grid;
  grid-area: main;
  grid-template-columns: 1.4fr 1fr;
  background-color: inherit;
  gap: 25px;

  @media screen and (max-width: 720px) {
    max-width: 100vw;
    grid-template-columns: 1fr;
  }
`

const Card = styled.div`
  width: 100%;
  position: relative;
  
  @media screen and (max-width: 720px) {
    max-width: 100vw;
  }


  h3{
    color: red;
  }
 
  section{
    margin-bottom: 15px;
  }
`

const Video = styled.video`
  width: 95%;
  height: 100%;
  display: block;
  margin: 0 auto;
`


const Overlay = styled.section`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  opacity: 0.2;
  background-color: darkcyan;
  z-index:1;
`
