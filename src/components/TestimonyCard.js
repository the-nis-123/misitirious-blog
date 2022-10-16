import styled from "styled-components";
import image1 from '../images/114.png';

const TestimonyCard = ({name, title, company, message}) => {
  return (
    <Wrapper>
        <Image src={image1} alt='' />
        <section>
          <h3>Jack Murphy</h3>
          <h5>Designer, OLUGA STORES</h5>
          <p>
            I know it and I love it, but I haven’t always
            followed it in this book. I start sentences with ands and buts.
          </p>
        </section>
    </Wrapper>
  )
}

export default TestimonyCard;

const Wrapper = styled.div`
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

const Image = styled.img`
  width: 60%;
  height: auto;
  display: block;
  margin: 0 auto;
`