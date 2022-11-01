import styled from "styled-components";
import PageTemplate from '../components/PageTemplate';
import image2 from '../images/559.jpg';
import PosterBlock from "../components/PosterBlock";
import EventWidget from "../components/PostWidget";
import useDummyText from "../hooks/useDummyText";

import image from '../images/862.jpg';



const intro = `
  In this tutorial Python will be written in a text editor.
  It is possible to write Python in an Integrated Development Environment,
  such as Thonny, Pycharm, Netbeans or Eclipse which are particularly useful
  when managing larger collections of Python files. Python in an Integrated Development 
  Environment,such as Thonny, Pycharm, Netbeans or Eclipse which are particularly useful
  when managing larger collections of Python files
`

const Products = () => {
  const intro = useDummyText(1);
  const about = useDummyText(2);
  
  return (
    <PageTemplate title='Our fashion events' image={image2} intro={intro}>
      <BlockOne>
        <h2>MISITIRIOUS FASHION EVENTS</h2>
        <For each='paragraph' of={about}>
          <p> {paragraph} </p>
        </For>
      </BlockOne>

      <PosterBlock image={image}/>
      <EventWidget image1={image} image2={image} />
    </PageTemplate>
  )
}

export default Products;


const BlockOne = styled.div`
 grid-area: header;
 padding: 15px 0;
 background-color: inherit;
`
