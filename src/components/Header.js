import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../logo.png';

const Header = () => {
  return (
    <Wrapper>
      <Section>
        <Logo src={logo} alt='' />
        <h2  className='hide-on-small-screens'>MISITIRIOUS</h2>
      </Section>
      
      <Section>
        <section style={{color:'purple'}} className='hide-on-small-screens'>
          <Link to='/'>Home</Link>
          <Link to='/products'>Our Products</Link>
          <Link to='/events'>Events</Link>
          <Link to='/about'>About Us</Link>
        </section>

        <a className='header-button'
          href='https://the-nis-123.github.io/misitirious/'
          target="_blank" 
          rel="noopener noreferrer"
        >Shop Now</a>
      </Section>
    </Wrapper>
  )
}

export default Header;

const Wrapper  = styled.header`
  width: 100%;
  padding: 10px 0;
  height: 70px;
  background-color: white;
  display:flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top:0;
`

const Section  = styled.div`
  display: flex;
  align-items:center;

  a{
    display:inline-block;
    margin-right: 15px;
    text-decoration: none;
    white-space: nowrap;
    font-family: 'Noto Sans Vai', sans-serif;
    color: purple;
  }

  .header-button{
    display: inline-lock;
    padding: 7px 20px;
    background-color: var(--primary-color);
    color: white;
    text-decoration: none;
    white-space: nowrap;
  }

  h2{
    white-space: nowrap;
  }
`

const Logo  = styled.img`
  width:60px;
  height: auto;
  margin-right: 10px;
`