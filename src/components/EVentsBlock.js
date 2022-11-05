import styled from "styled-components";

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
          <Video autoPlay muted loop>
            <source src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/rWFRtEk4Ejrjb627h/videoblocks-3324z_catwhdgroup110_rrkw06mzq__319d20e55a4f4ac2b3e1cc8dfcde2b7c__P360.mp4" type="video/mp4" />
          </Video>
        </Card>

        <Card>
          <If condition={events?.data}>
            <For each='item' of={events.data.events}>
              <Event name={item.name} image={item.images[0]} />
            </For>
          </If>
        </Card>
      </Events>
    </Wrapper>
    
  )
}

export default EventsBlock;


const Wrapper = styled.div`
  grid-area: main;
  background-color: inherit;
  padding: 0 1em;

  h2{
    padding: 0.5em 0;
  }
`

const Events = styled.div`
  background-color: inherit;
  display: grid;
  gap: 2em;

  @media only screen and (min-width: 800px)  {
    grid-template-columns: repeat(2, 1fr);
  }
`

const Card = styled.div`
  width: 100%;
  position: relative;

  h3{
    color: red;
  }
 
  section{
    margin-bottom: 15px;
  }
`

const Video = styled.video`
  width: 100%;
  height: 100%;
  aspect-ratio: 16/9;
`

