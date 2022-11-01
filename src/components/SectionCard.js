import styled from "styled-components";
import { Link } from "react-router-dom";



const SectionCard = ({image, name}) => {
  return (
    <Section>
      <Image style={{ backgroundImage:`url(${image })`}} />
      <section>
        <h3>{name }</h3>
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
    </Section>
  )
}

export default SectionCard;

const Section = styled.div`
  border-radius: 5px;
  background-color: inherit;
  font-family: 'Noto Sans Vai', sans-serif;
  flex: 50%;
  
  section{
    margin-bottom: 10px;

    h3{
      color: #0a0e59;
      text-transform: uppercase;
      margin-bottom: 10px;
    }

    a{
      color: #7e49f2;
    }

    text-align: left;
  }
`


const Image = styled.section`
  width: 100%;
  height: 300px;
  margin: 0 auto;
  background-size: cover;
  background-repeat:no-repeat;
  background-position: center;
`