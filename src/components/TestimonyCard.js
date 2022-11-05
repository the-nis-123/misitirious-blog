import styled from "styled-components";

const TestimonyCard = ({name, job, company,image, message}) => {
  return (
    <Wrapper>
      <Image src={image} alt='' />
      <section>
        <h3>{name}</h3>
        <h5>{job}, {company}</h5>
        <p>{message}</p>
      </section>
    </Wrapper>
  )
}

export default TestimonyCard;

const Wrapper = styled.div`
    height: auto;
    padding: 1em;
    border-radius: 5px;
    font-family: 'Noto Sans Vai', sans-serif;
    text-align: center;
    background-color: white;
    min-width: 14em;
    min-height: 20em;
  section{
    margin-bottom: 1em;

    h3{
      color: #0a0e59;
    }

    a{
      color: #7e49f2;
    }

    p{
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      line-clamp: 4; 
    }
  }
`

const Image = styled.img`
  width: 8em;
  height: 8em;
  display: block;
  margin: 0 auto;
  border-radius: 50%;
`