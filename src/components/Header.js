import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../logo.png';
import Button from './Button';

const Header = () => {
  return (
    <Wrapper>
      <Section>
        <Logo src={logo} alt='' />
        <h2>MISITIRIOUS BLOG</h2>
      </Section>
      
      <Section>
        <Section>
          <Link to='/'>Home</Link>
          <Link to='/products'>Our Products</Link>
          <Link to='/events'>Events</Link>
          <Link to='/about'>About Us</Link>
        </Section>
        <Button to='/'>Shop Now</Button>
      </Section>
    </Wrapper>
  )
}

export default Header;

const Wrapper  = styled.header`
  width: 100%;
  padding: 10px 20px;
  height: 70px;
  background-color: white;
  display:flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #d9d8dd;
`

const Section  = styled.section`
  display: flex;
  align-items:center;

  a{
    display:inline-block;
    margin-right: 15px;
    text-decoration: none;
    white-space: nowrap;
  }

  h2{
    white-space: nowrap;
  }

  @media screen and (max-width: 960px) {
    h2,a{
      display: none;
    }
  }
`

const Logo  = styled.img`
  width:60px;
  height: auto;
  margin-right: 10px;
`