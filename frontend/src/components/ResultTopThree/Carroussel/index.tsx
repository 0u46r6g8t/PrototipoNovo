import React, { useEffect } from 'react';

import { Container, Content, BoxData, DataURL } from './styles';

// Function(s)
import {splitWordFull} from '../../../functions';

const images = [
  'https://source.unsplash.com/1000x800',
  'https://source.unsplash.com/1000x802',
  'https://source.unsplash.com/1000x804',
];

const Carroussel = (props) => {

  const DataReceive: any[] = [];

  props.data.map(item => {
    if (props.buttonId == item.indexFile)
      DataReceive.push(item);
  });
  
  console.log(DataReceive);

  return (
    <Container>
      <Content>
        {DataReceive.map(item => (
          <BoxData url={""}>
            <span>{splitWordFull(item.item.name)}</span>
          </BoxData>
        ))}
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
