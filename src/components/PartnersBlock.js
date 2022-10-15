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
      <PartnerCard Icon={Amazon} name='Amazon' />
      <PartnerCard Icon={FiveHundredPx} name='FiveHundredPx' />
      <PartnerCard  Icon={Ebay} name='Ebay' />
      <PartnerCard Icon={Namebase} name='Namebase' />
      <PartnerCard Icon={Shopware} name='Shopware' />
      <PartnerCard Icon={Behance} name='Behance' />
      <PartnerCard  Icon={Shopify} name='Shopify' />
    </Wrapper>
  )
}

export default PartnersBlock;

const Wrapper = styled.section`
  background-color: white;
  display: flex;
  justify-content: space-evenly;
  gap: 20px;
  grid-area: partners;
  padding: 50px;

  @media screen and (max-width: 680px) {
    max-width: 100vw;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`

