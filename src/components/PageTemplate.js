import styled from "styled-components";
import FooterBlock from "../components/FooterBlock";


function Cart({children, image, title, intro}) {
  return (
    <>
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

      </PageTemplate>
      <FooterBlock />
    </>
  )
}

export default Cart;

const PageTemplate = styled.div`
  display: grid;
  grid-template-areas:
  'title title title title title title'
  'image image image image image image'
  'header header header header header header'
  'poster poster poster poster poster poster'
  'services services services services services services';

  padding: 20px 30px;
  background-color: white;
`

const Image = styled.div`
  grid-area: image;
  height: 300px;
  background-repeat: no-repeat;
  background-origin: content-box;
  background-size: cover;
  background-position: center;
`

const Head = styled.div`
 grid-area: title;
 padding: 10px 0;

 h2{
  text-transform: uppercase;
  margin-bottom: 10px;
 }

 p{
  padding: 10px 0;
 }
`