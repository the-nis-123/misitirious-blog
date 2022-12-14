import styled from "styled-components";
import { Link } from 'react-router-dom';

import { TwitterWithCircle } from '@styled-icons/entypo-social/TwitterWithCircle';
import { InstagramWithCircle } from '@styled-icons/entypo-social/InstagramWithCircle';
import { LinkedinWithCircle } from '@styled-icons/entypo-social/LinkedinWithCircle';
import { FacebookWithCircle } from '@styled-icons/entypo-social/FacebookWithCircle';
import { GithubWithCircle } from '@styled-icons/entypo-social/GithubWithCircle';

const FooterSubscribe = () => {
  return (
    <Wrapper>
      <h2>MISITIRIOUS</h2>

      <p>
        Subscribe to our news letter and
        get instant notifications about our products, events and services
        right into your email inbox.
      </p>

      <form>
        <Input type='text' placeholder='John Doe' />
        <Input type='email' placeholder='johndoe@gmail.com' />
        <Button type='submit' value='Subscribe to Misitirious' />
      </form>

      <FooterIcons>
        <a href='https://github.com/the-nis-123'  target="_blank" rel="noopener noreferrer">
          <InstagramWithCircle />
        </a>
        
        <a href='https://github.com/the-nis-123'  target="_blank" rel="noopener noreferrer">
          <FacebookWithCircle />
        </a>

        <a href='https://twitter.com/niscloud_kintu'  target="_blank" rel="noopener noreferrer">
          <TwitterWithCircle />
        </a>

        <a href='https://www.linkedin.com/in/kintu-denis/'  target="_blank" rel="noopener noreferrer">
          <LinkedinWithCircle />
        </a>
      </FooterIcons>
    </Wrapper>
  )
}

export default FooterSubscribe;

const Wrapper = styled.section`
  background-color: white;
  text-align: center;
  padding: 1em;
  border-radius: 0.4em;
  width: 100%;

 h2{
    margin-bottom: 1em;
  }
`

const Input = styled.input`
  display: block;
  width: 90%;
  margin: 0.6em auto;
  padding: 1.2em 2em;
  outline: none;
  border:  none;
  background-color: #c8c8c8;
`
const Button = styled(Input)`
  color: white;
  background-color: red;
  
   :hover{
    cursor: pointer
  }
`

const FooterIcons = styled.section`
  a{
    color: #594e47;
    text-decoration: none;

    svg{
    width: 3rem;
    height: auto;
    margin-right: 15px;

      :hover{
        color: red
      }
    }
  }

  padding: 10px 0;
`