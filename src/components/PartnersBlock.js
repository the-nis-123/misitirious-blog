import styled from "styled-components";
import PartnerCard from "./PartnerCard";


import { FiveHundredPx } from '@styled-icons/boxicons-logos/FiveHundredPx';
import { Behance } from '@styled-icons/boxicons-logos/Behance';
import { Namebase } from '@styled-icons/simple-icons/Namebase';
import { Ebay } from '@styled-icons/simple-icons/Ebay';
import { Amazon } from '@styled-icons/simple-icons/Amazon';
import { Shopware } from '@styled-icons/fa-brands/Shopware';
import { Shopify } from '@styled-icons/boxicons-logos/Shopify';

const PartnersBlock = () => {
  return (
    <Wrapper>
      <h2>Our business partners</h2>
      <Partners>
        <PartnerCard Icon={Amazon} name='Amazon' />
        <PartnerCard Icon={FiveHundredPx} name='FiveHundredPx' />
        <PartnerCard  Icon={Ebay} name='Ebay' />
        <PartnerCard Icon={Namebase} name='Namebase' />
        <PartnerCard Icon={Shopware} name='Shopware' />
        <PartnerCard Icon={Behance} name='Behance' />
        <PartnerCard  Icon={Shopify} name='Shopify' />
      </Partners>
    </Wrapper>

    
  )
}

export default PartnersBlock;

const Wrapper = styled.div`
  background-color: white;
  grid-area: partners;
  padding:  30px;
  text-align: center;

  @media only screen and (min-width: 720px)  {
    text-align: left;
  }
`


const Partners = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: inherit;
  gap: 20px;
  grid-area: partners;
  padding: 20px 0;

  @media only screen and (min-width: 720px)  {
    grid-template-columns: repeat(7,1fr);
    align-items: center;
  }
`