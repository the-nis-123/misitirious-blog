import styled from "styled-components";

import SectionCard from "./SectionCard";

const PostWidget = ({image1, image2}) => {
  return (
    <Wrapper>
      <SectionCard image={image2} name='Beauty, Fragrance reading'/>
      <SectionCard image={image1} name='Apparrel simplified to improve'/>
    </Wrapper>
  )
}

export default PostWidget;



export const LandingPageWidget = ({image1, image2}) => {
  return (
    <Service>
      <SectionCard image={image2} name='Beauty, Fragrance reading'/>
      <SectionCard image={image1} name='Apparrel simplified to improve'/>
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
