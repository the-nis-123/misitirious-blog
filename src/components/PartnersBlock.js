import styled from "styled-components";
import PartnerCard from "./PartnerCard";
import Carousel from "./carousel/Carousel";


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
      <Carousel show={4} infiniteLoop auto={true}>
        <PartnerCard Icon={Amazon} name='Amazon' />
        <PartnerCard Icon={FiveHundredPx} name='FiveHundredPx' />
        <PartnerCard  Icon={Ebay} name='Ebay' />
        <PartnerCard Icon={Namebase} name='Namebase' />
        <PartnerCard Icon={Shopware} name='Shopware' />
        <PartnerCard Icon={Behance} name='Behance' />
        <PartnerCard  Icon={Shopify} name='Shopify' />
      </Carousel>
    </Wrapper>
  )
}

export default PartnersBlock;

const Wrapper = styled.div`
  background-color: white;
  grid-area: partners;
  padding:  2em 0;
  text-align: center;

  h2{
    padding: 0 0.6em;
  }

  @media only screen and (min-width: 720px)  {
    text-align: left;
  }
`
