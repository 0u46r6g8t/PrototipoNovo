import React, { useEffect } from 'react';

import { Container, Content, BoxData, DataURL } from './styles';

// Function(s)
import {splitWordFull} from '../../../functions';

const images = [
  'https://source.unsplash.com/1000x800',
  'https://source.unsplash.com/1000x802',
  'https://source.unsplash.com/1000x804',
];

function ContainerBoxData(){

  return (
    <BoxData url={""}>
      <span>{splitWordFull(name)}</span>
    </BoxData>
  )
}

const Carroussel = (props) => {
  const DataReceive: any[] = [];

  props.data.map((item, index) => {
    if( index === props.buttonId) 
      DataReceive.push(item[2]);
  })
  return (
    <Container>
      <Content>
        {
          DataReceive.map((item, index) => (
            item.map(itemFile => (
              <BoxData>
                <span>{splitWordFull(itemFile.name)}</span>
              </BoxData>
            ))
          ))
        }
        {/* <BoxData url={images[1]}>
          <span>Segunda Imagem</span>
        </BoxData>
        <BoxData url={images[2]}>
          <span>Terceira Imagem</span>
        </BoxData> */}
      </Content>
    </Container>
  );
};
export default Carroussel;
