import styled from "styled-components";
import TestimonyCard from "./TestimonyCard";
import useAppContext from '../hooks/useAppContext';
import useDummyText from '../hooks/useDummyText';
import Carousel from "./carousel/Carousel";

const TestimonyBlock = () => {
  const {comments} = useAppContext();
  const message = useDummyText(1);
  console.log(comments);
  
  return (
    <Wrapper>
      <h2>Word on the street about us</h2>

      <Carousel show={4} infiniteLoop auto={true}>
        <If condition={ comments.data }>
          <For each='comment' of={comments.data.users}>
            <TestimonyCard 
              name={comment.username} 
              job={comment.job}
              image={comment.avatar}
              company={comment.company}
              message={message}
              key={comment.id}
            />
          </For>
        </If>
      </Carousel>
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


   h5{
    color:#de9c9d;
    text-align: center;
   }

  section{
    h3{
      padding: 10px 0;
      color: #594e47;
      white-space: nowrap;
      text-align: center;
    }
  }
`

