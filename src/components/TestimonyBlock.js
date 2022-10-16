import styled from "styled-components";
import TestimonyCard from "./TestimonyCard";

const TestimonyBlock = () => {
  return (
    <Wrapper>
      <h2>Word on the street about us</h2>
       
      <Testify>
        <TestimonyCard />
        <TestimonyCard/>
        <TestimonyCard/>
        <TestimonyCard/>
        <TestimonyCard/>
      </Testify>
    </Wrapper>
   
  )
}

export default TestimonyBlock;


const Wrapper = styled.div`
  background-color: inherit;
  grid-area: testify;

   h2{
    padding: 10px 30px;
   }
`

const Testify = styled.div`
  display: grid;
  grid-template-columns: repeat(5,1fr);
  background-color: inherit;
  gap: 10px;
  grid-area: footer;

   h5{
    color:#de9c9d;
    white-space: nowrap;
    text-align: center;
   }

  section{
    h3{
      padding: 10px 0;
      color: #594e47
      white-space: nowrap;
      text-align: center;
    }
  }

  @media screen and (max-width: 680px) {
    max-width: 100vw;
    grid-template-columns: repeat(2, 1fr);
  }
`

