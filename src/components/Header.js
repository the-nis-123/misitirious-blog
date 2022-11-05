import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../logo.png';

const Header = () => {
  return (
    <Wrapper>
      <Section>
        <Logo src={logo} alt='' />
        <h2>MISITIRIOUS</h2>
      </Section>
      
      <Section>
        <section style={{color:'purple'}} className='menu'>
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
  height: 5em;
  background-color: white;
  display:flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 5;
  padding: 1em;
`

const Section  = styled.div`
  display: flex;
  align-items:center;

  h2, .menu{
    display: none;
  }

  @media only screen and (min-width: 640px)  {
    h2{
      display: block;
      white-space: nowrap;
    }
  }

  @media only screen and (min-width: 1000px)  {
    .menu{
      display: block;
    }

    a{
      display:inline-block;
      margin-right: 15px;
      text-decoration: none;
      white-space: nowrap;
      font-family: 'Noto Sans Vai', sans-serif;
      color: purple;
    }
  }


  .header-button{
    display: inline-lock;
    padding: 0.6em 2em;
    background-color: var(--primary-color);
    color: white;
    text-decoration: none;
    white-space: nowrap;
  }
`

const Logo  = styled.img`
  width: 4em;
  height: auto;
  margin-right: 1em;
`
