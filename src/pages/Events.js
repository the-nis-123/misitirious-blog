import styled from "styled-components";
import PageTemplate from '../components/PageTemplate';
import image2 from '../images/559.jpg';
import PosterBlock from "../components/PosterBlock";
import EventWidget from "../components/PostWidget";
import useDummyText from "../hooks/useDummyText";


import image1 from '../images/556.jpg';
import image3 from '../images/557.jpg';
import image6 from '../images/112.png';

import EventsPageContext from "../contexts/EventsPageContext";


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
    <EventsPageContext>
      <PageTemplate title='Our fashion events' image={image2} intro={intro}>
        <BlockOne>
          <h2>MISITIRIOUS FASHION EVENTS</h2>
          <For each='paragraph' of={about}>
            <p> {paragraph} </p>
          </For>
        </BlockOne>

        <PosterBlock image={image6}/>
        <EventWidget image1={image1} image2={image3} />
      </PageTemplate>
    </EventsPageContext>
  )
}

export default Products;


const BlockOne = styled.div`
 grid-area: header;
 padding: 15px 0;
 background-color: inherit;
`
