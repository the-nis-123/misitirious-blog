import styled from "styled-components";
import SectionCard from "./SectionCard";
import useHomeContext from '../hooks/useAppContext';
import useDummyText from '../hooks/useDummyText';

const PostWidget = ({image1, image2}) => {
  const {gallery} = useHomeContext();
  console.log(gallery);

  return (
    <Wrapper>
      <If condition={gallery?.data}>
        <SectionCard image={gallery.data[0]} name='Beauty, Fragrance reading'/>
        <SectionCard image={gallery.data[1]} name='Apparrel simplified to improve'/>
      </If>
    </Wrapper>
  )
}

export default PostWidget;



export const LandingPageWidget = ({image1, image2}) => {
  const {gallery} = useHomeContext();

  return (
    <Service>
      <If condition={gallery?.data}>
        <SectionCard image={gallery.data[0]} name='Beauty, Fragrance reading'/>
        <SectionCard image={gallery.data[1]} name='Apparrel simplified to improve'/>
      </If>
    </Service>
  )
}


const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(2,1fr);
  grid-area: services;
  padding: 20px 0;
  background-color: white;
  gap: 20px;
   
  @media screen and (max-width: 960px) {
    max-width: 100vw;
    grid-template-columns: 1fr;
  }
`

const Service = styled(Wrapper)`
  padding: 20px 30px;
`
