import styled from "styled-components";
import FooterAbout from "./FooterSection";
import FooterSubscribe from "./FooterSubscribe";

const FooterBlock = () => {
  return (
    <Wrapper>
      <Section>
        <FooterSubscribe />

        <FooterAbout />
        <FooterAbout />
        <FooterAbout />
      </Section>
          
      <LowerSection>
        <section>
          <span>&copy;{new Date().getFullYear()} Misitirious Inc. </span>
          <span>All rights reserved.</span>
        </section>

        <section>
          <span>Service Status | </span>
          <span>Legal | </span>
          <span>Privacy</span>
        </section>
      </LowerSection>
    </Wrapper>
  )
}

export default FooterBlock;


const Wrapper = styled.footer`
  background-color: #c8c8c8;
  padding: 0 1em;
`

const Section = styled.section`
  display: grid;
  gap: 1em;
  padding: 2em 0;
  text-align: center;


  @media only screen and (min-width: 720px)  {
    grid-template-columns: repeat(4, 1fr);
  }
`

const LowerSection = styled.section`
  border-top: solid 1px grey;
  padding: 1em 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

