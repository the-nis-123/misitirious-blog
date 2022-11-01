import styled from 'styled-components';
import { Link } from 'react-router-dom';
  
const Event = ({name, image}) => {
  return (
    <Wrapper>
      <EventImage style={{backgroundImage: `url(${image})`}} />

      <section>
        <h5>{ name }</h5>
        <strong>Date: , Venue: </strong>
        <p>
          I know it and I love it, but I haven’t always
          followed it in this book. I start sentences with ands and buts.<br/>
          <Link to='/events'>read more</Link>
        </p>
      </section>
    </Wrapper>
  )
}

export default Event;


const Wrapper = styled.div`
  margin-bottom: 15px;
  display:flex;
  height: 95px;
  overflow: hidden;

  strong{
    white-space: nowrap;
  }

  a{
    display:inline-block;
    color:#de9c9d;
  }
`

const EventImage = styled.div`
  height: 100%;
  width: 220px;
  margin-right: 15px;
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
`