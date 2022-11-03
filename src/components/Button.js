import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const RoundedButton = ({children, to}) => {
  return (
    <RoundButton to={to}>
      {children}
    </RoundButton>
  )
}


export const RoundButtonWhite = ({children, to}) => {
  return (
    <WhiteButton to={to}>
      {children}
    </WhiteButton>
  )
}

const RoundButton = styled(Link)`
  display: inline-lock;
  padding: 0.7em 2em;
  background-color:  var(--primary-color);
  color: white;
  text-decoration: none;
  white-space: nowrap;
  border-radius: 2em;
  display: inline-block;
`


const WhiteButton = styled(RoundButton)`
  background-color: white;
  color: red;
  border: 1px solid  var(--primary-color);
`