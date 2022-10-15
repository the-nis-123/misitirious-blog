import styled from "styled-components";
import Card from "./Card";
import image1 from '../images/114.png';
import image2 from '../images/632.png';
import image3 from '../images/110.png';
import image4 from '../images/776.png';
import image5 from '../images/107.png';

const TestimonyBlock = () => {
  return (
    <Wrapper>
      <h2>Word on the street about us</h2>
       
      <Testify>
        <Card>
          <Image src={image1} alt='' />
          <section>
            <h3>Jack Murphy</h3>
            <h5>Designer, OLUGA STORES</h5>
            <p>
              I know it and I love it, but I haven’t always
              followed it in this book. I start sentences with ands and buts.
            </p>
          </section>
        </Card>

        <Card>
          <Image src={image2} alt='' />
          <section>
            <h3>Rea More</h3>
            <h5>Model, MISITIRIOUS</h5>
            <p>
              I know it and I love it, but I haven’t always
              followed it in this book. I start sentences with ands and buts.
            </p>
          </section>
        </Card>

        <Card>
          <Image src={image3} alt='' />
          <section>
            <h3>Jessi Glenn</h3>
            <h5>Marketing Director, SULP</h5>
            <p>
              I know it and I love it, but I haven’t always
              followed it in this book. I start sentences with ands and buts.
            </p>
          </section>
        </Card>

        <Card>
          <Image src={image4} alt='' />
          <section>
            <h3>Antony Bravka</h3>
            <h5>CEO, MELPA</h5>
            <p>
              I know it and I love it, but I haven’t always
              followed it in this book. I start sentences with ands and buts.
            </p>
          </section>
        </Card>

        <Card>
          <Image src={image5} alt='' />
          <section>
            <h3>Eric Miller</h3>
            <h5>CEO, SULP</h5>
            <p>
              I know it and I love it, but I haven’t always
              followed it in this book. I start sentences with ands and buts.
            </p>
          </section>
        </Card>
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

const Testify = styled.section`
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


const Image = styled.img`
  width: 60%;
  height: auto;
  display: block;
  margin: 0 auto;
`