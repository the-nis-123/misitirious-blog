import styled from "styled-components";
import useHomeContext from '../hooks/useAppContext';
import useDummyText from '../hooks/useDummyText';


const PosterBlock = ({image}) => {
  const {gallery} = useHomeContext();
  console.log(gallery);

  return (
    <Wrapper style={{ backgroundImage: `url(${image})` }} >
      <Overlay />
      
      <section>
        <h2>Misitirious Essentials</h2>
        <p>
          W3Schools is optimized for learning, testing, and training.
          Examples might be simplified to improve reading and basic understanding.
          Tutorials, references, and examples are constantly reviewed to avoid errors,
          but we cannot warrant full correctness of all content. While using this
          site, you agree to have read and accepted our terms of use, cookie and
          Examples might be simplified to improve reading and basic understanding.
          Tutorials, references, and examples are constantly reviewed to avoid errors,
          but we cannot warrant full correctness of all content. While using this
          site, you agree to have read and accepted our terms of use, cookie and
          privacy policy. Copyright 1999-2020 by Refsnes Data
          The most recent major version of Python is Python 3,
          which we shall be using in this tutorial. However, Python 2,
          although not being updated with anything other than security updates,
          is still quite popular.
          In this tutorial Python will be written in a text editor.
          It is possible to write Python in an Integrated Development Environment,
          such as Thonny, Pycharm, Netbeans or Eclipse which are particularly useful
          when managing larger collections of Python files
        </p>
      </section>
       

      <section>
        <h2>Music, Wines and Fashion</h2>
        <p>
          W3Schools is optimized for learning, testing, and training.
          Examples might be simplified to improve reading and basic understanding.
          Tutorials, references, and examples are constantly reviewed to avoid errors,
          but we cannot warrant full correctness of all content. While using this
          site, you agree to have read and accepted our terms of use, cookie and
          Examples might be simplified to improve reading and basic understanding.
          Tutorials, references, and examples are constantly reviewed to avoid errors,
          but we cannot warrant full correctness of all content. While using this
          site, you agree to have read and accepted our terms of use, cookie and
          privacy policy. Copyright 1999-2020 by Refsnes Data
          The most recent major version of Python is Python 3,
          which we shall be using in this tutorial. However, Python 2,
          although not being updated with anything other than security updates,
          is still quite popular.
          In this tutorial Python will be written in a text editor.
          It is possible to write Python in an Integrated Development Environment,
          such as Thonny, Pycharm, Netbeans or Eclipse which are particularly useful
          when managing larger collections of Python files
        </p>
      </section>
    </Wrapper>
  )
}

export default PosterBlock;

const Wrapper = styled.section`
  display: flex;
  grid-area: poster;
  padding: 20px 0;
  background-color: black;
  gap: 20px;
  height: auto;
  background-size: cover;
  background-repeat:no-repeat;
  background-position: center;
  position: relative;

   @media screen and (max-width: 960px) {
    max-width: 100vw;
    flex-flow: column;
  }

  section{
    z-index: 2;
    padding: 0 30px;

    h2{
      margin-bottom: 10px;
      color: #0a0e59;
    }
  }
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  opacity: 0.6;
  background-color: white;
  z-index:1;
`
