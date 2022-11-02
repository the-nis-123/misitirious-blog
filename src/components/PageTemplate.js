import styled from "styled-components";
import FooterBlock from "../components/Footer";


function Cart({children, image, title, intro}) {
  return (
    <PageTemplate>
      <Head>
        <h2>{title}</h2>
        <If condition={intro !== undefined}>
          <For each='paragraph' of={intro}>
            <p> {paragraph} </p>
          </For>
        </If>
      </Head>

      <Image style={{backgroundImage:`url(${image})`}}/>
    
      { children }

      <FooterBlock />
    </PageTemplate>
  )
}

export default Cart;

const PageTemplate = styled.div`
  width: 100%;
  height: calc(100% - 6em);
  background-color: white;
  font-family: 'Noto Sans Vai', sans-serif;
`

const Image = styled.div`
  grid-area: image;
  height: 35vh;
  background-repeat: no-repeat;
  background-origin: content-box;
  background-size: cover;
  background-position: center;
  width: calc(100% - 2em);
  margin: 0 auto;
`

const Head = styled.div`
 grid-area: title;
 padding: 1em;

 h2{
  text-transform: uppercase;
  margin-bottom: 10px;
 }

 p{
  padding: 10px 0;
 }
`