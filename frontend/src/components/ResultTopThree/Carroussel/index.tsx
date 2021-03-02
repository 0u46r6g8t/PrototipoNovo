import React from 'react';

import { Container, Content, BoxData, DataURL } from './styles';

const images = [
  'https://source.unsplash.com/1000x800',
  'https://source.unsplash.com/1000x802',
  'https://source.unsplash.com/1000x804',
];

const Carroussel = () => {
  return (
    <Container>
      <Content>
        <BoxData url={images[0]}>
          <span>Primeira Imagem</span>
        </BoxData>
        <BoxData url={images[1]}>
          <span>Segunda Imagem</span>
        </BoxData>
        <BoxData url={images[2]}>
          <span>Terceira Imagem</span>
        </BoxData>
      </Content>
    </Container>
  );
};
export default Carroussel;
