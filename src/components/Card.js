import styled from "styled-components";

const Card = ({children}) => {
  return (
    <Wrapper>{ children }</Wrapper>
  )
}

export default Card;

const Wrapper = styled.section`
  height: auto;
  padding: 20px;
  border-radius: 5px;

  section{
    margin-bottom: 10px;

    h3{
      color: #0a0e59;
    }

    a{
      color: #7e49f2;
    }
  }
`