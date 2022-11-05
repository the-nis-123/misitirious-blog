import styled from "styled-components";
  
const PartnerCard = ({Icon, name}) => {
  return (
    <Wrapper>
      { IconWithStyles(Icon) }
      <h2>{ name }</h2>
    </Wrapper>
  )
}

export default PartnerCard;

const IconWithStyles = ( Icon ) => {
  return (
    <Icon size='8em' style={{color:'#594e47', display:'block', margin:'1em auto'}} />
  )
}

const Wrapper = styled.div`
  background-color: inherit;
  text-align: center;
  margin: 1em 0;
  padding: 2em;
  min-width: 15em;
 
  h2{
    white-space: nowrap;
  }
`;