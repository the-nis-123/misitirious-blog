import styled from 'styled-components';
import { Link } from 'react-router-dom';
  
const Event = ({name, image}) => {
  return (
    <Wrapper>
      <EventImage style={{backgroundImage: `url(${image})`}} />

      <section>
        <h3 className='event-name'>{ name }</h3>
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
  width: 100%;
  height: 7em;
  margin-bottom: 15px;
  display:flex;
  overflow: hidden;

  strong{
    white-space: nowrap;
  }

  a{
    display:inline-block;
    color:#de9c9d;
  }

  .event-name{
    text-transform: capitalize;
    color: #0a0e59;
  }
`

const EventImage = styled.div`
  height: 100%;
  min-width: 40%;
  margin-right: 15px;
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
`