import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Button = ({children, to}) => {
  return (
    <MyButton to={to} >{children}</MyButton>
  )
}

export default Button;


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

const MyButton = styled(Link)`
  display: inline-lock;
  padding: 7px 20px;
  background-color: red;
  color: white;
  text-decoration: none;
  white-space: nowrap;
`
const RoundButton = styled(MyButton)`
  border-radius: 20px;
  display: inline-block;
`


const WhiteButton = styled(RoundButton)`
  background-color: white;
  color: red;
  border: 1px solid red;
`