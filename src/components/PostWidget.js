import styled from "styled-components";
import SectionCard from "./SectionCard";
import useHomeContext from '../hooks/useAppContext';

const PostWidget = () => {
  const {events} = useHomeContext();
  console.log(events);

  return (
    <Wrapper>
      <If condition={events?.data}>
        <SectionCard 
          image={events.data.events[0].images[2]} 
          name={events.data.events[0].name}
        />

        <SectionCard 
          image={events.data.events[1].images[3]} 
          name={events.data.events[1].name}
        />
      </If>
    </Wrapper>
  )
}

export default PostWidget;



export const LandingPageWidget = () => {
  const {events} = useHomeContext();

  return (
    <Service>
      <If condition={events?.data}>
        <SectionCard 
          image={events.data.events[2].images[2]} 
          name={events.data.events[2].name}
        />

        <SectionCard 
          image={events.data.events[3].images[3]} 
          name={events.data.events[3].name}
        />
      </If>
    </Service>
  )
}


const Wrapper = styled.section`
  grid-area: services;
  padding: 1em ;
  background-color: white;
  gap: 2em;
`

const Service = styled(Wrapper)`
  padding: 1em;
`
