import styled from "styled-components";
import IconWithStyles from "./IconWithStyles";

  
const PartnerCard = ({Icon, name}) => {
  return (
    <Wrapper>
      { IconWithStyles(Icon) }
      <h2>{ name }</h2>
    </Wrapper>
  )
}

export default PartnerCard;

const Wrapper = styled.div`
  background-color: inherit;
  text-align: center;
  h2{
    white-space: nowrap;
  }
`;