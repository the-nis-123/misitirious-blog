import styled from 'styled-components';
import { Link } from 'react-router-dom';
  
const Event = ({name, image}) => {
  return (
    <Wrapper>
      <EventImage src={image} alt='' />
      <section>
        <h4>{ name }</h4>
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
  height: 100px;
  overflow: hidden;

  strong{
    white-space: nowrap;
  }

  a{
    display:inline-block;
    color:#de9c9d;
  }
`

const EventImage = styled.img`
  height: 100%;
  width: auto;
  margin-right: 15px;
`