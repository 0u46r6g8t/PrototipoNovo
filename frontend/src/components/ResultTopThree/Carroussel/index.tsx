import React, { useEffect } from 'react';

import { Container, Content, BoxData, DataURL } from './styles';

// Function(s)
import {splitWordFull} from '../../../functions';

const Carroussel = (props) => {

  // Inicializa um array vazio para receber os dados.
  const DataReceive: any[] = [];

  // Realiza o mapeamento dos dados e então manda somente os dados da imagem correspondente.
  props.data.map((item, index) => {
    if( index === props.buttonId) 
      DataReceive.push(item[2]);
  })
  return (
    <Container>
      <Content>
        {
          DataReceive.map((item, index) => (
            item.map((itemFile, indexFile) => (
              <BoxData>
                <span>{indexFile + 1 + '°'} - {splitWordFull(itemFile.name)}</span>
              </BoxData>
            ))
          ))
        }
      </Content>
    </Container>
  );
};
export default Carroussel;
