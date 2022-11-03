import styled from "styled-components";

import { CustomerService2 } from '@styled-icons/remix-fill/CustomerService2';
import { Globe } from '@styled-icons/fluentui-system-regular/Globe';
import { Truck } from '@styled-icons/bootstrap/Truck';
import { TrendingUp } from '@styled-icons/feather/TrendingUp';

const QuickAccess = () => {
  return (
    <Wrapper>
      <IconWithStyles Icon={CustomerService2} phrase='24/7 SERVICE' def='Customer care like no other'/>
      <IconWithStyles Icon={TrendingUp} phrase='UNMATCHED TRENDS' def='We lead and they follow'/>
      <IconWithStyles Icon={Truck} phrase='CONVIENCE' def='Delivered to your door steps'/>
      <IconWithStyles Icon={Globe} phrase='GLOBAL PRESENCE' def="No where we aren't" />
    </Wrapper>
  )
}

export default QuickAccess;


const IconWithStyles = ( {Icon, phrase, def} ) => {
  return (
    <Section>
      <Icon size='5em' style={{ color: '#de9c9d' }} />
      <h2>{phrase}</h2>
      <p>{def}</p>
    </Section>
  )
}

const Wrapper = styled.div`
  grid-area: quick;
  padding: 3em 0;
  background-color: white;
  display: grid;
  gap: 1em;

  @media only screen and (min-width: 720px)  {
    grid-template-columns: repeat(4,1fr);
    align-items: center;
  }
`

const Section = styled.section`
  text-align: center;
`