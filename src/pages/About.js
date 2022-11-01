import styled from "styled-components";
import PageTemplate from '../components/PageTemplate';
import image from '../images/932.jpg';
import PosterBlock from "../components/PosterBlock";
import AboutWidget from "../components/PostWidget";
import useDummyText from "../hooks/useDummyText";
import image1 from '../images/862.jpg'


const Products = () => {
  const intro = useDummyText(1);
  const about = useDummyText(2);
  
  return (
    <PageTemplate image={image} title='A BRIEF HISTORY' intro={intro}>
      <BlockOne>
        <For each='paragraph' of={about}>
          <p> {paragraph} </p>
        </For>
      </BlockOne>

      <PosterBlock image={image1}/>
      <AboutWidget image1={image1} image2={image} />
      
    </PageTemplate>
  )
}

export default Products;


const BlockOne = styled.div`
 grid-area: header;
 padding: 15px 0;
 background-color: inherit;
`
