import React, { useCallback, useEffect, useState } from 'react';

// [+] Bibliotecas

// Icon(s)
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';

// Progress Bar
import LinearProgress from '@material-ui/core/LinearProgress';
import Modal from './Modal';
import { useFiles, IDragDrop, IResponse } from '../../interfaces';

import {
  Container,
  ContentImage,
  ContentList,
  Data,
  DataImage,
  TextImage,
  FooterData,
  ButtonClick,
} from './styles';

// Componente

import Carroussel from './Carroussel';

const data = [
  {
    id: 0,
    percentage: 87.4,
    name: 'Pinheiro',
    url: 'https://img.olx.com.br/images/17/179026567299551.jpg',
    urlDB:
      'https://cdn.pixabay.com/photo/2014/11/24/00/48/pinheiro-543393_960_720.jpg',
  },
  { id: 1, percentage: 12.0, name: 'Roseira', url: '', urlDB: '' },
  { id: 2, percentage: 0.6, name: 'Pau-Brasil', url: '', urlDB: '' },
];

const ResultTopThree: React.FC = () => {
  const [dataActive, setDataActive] = useState<IDragDrop[]>([]);
  const { responseFile } = useFiles();

  const responseData: IResponse[] = [];
  

  responseFile.map((itemFile, indexFile) => {
    itemFile.resuts.map((item, index) => {
      if( index < 3)
        responseData.push({indexFile, item});
    });
  });

  // Mudança do estado do button

  const handleFile = useCallback((valueBool: Boolean) => {
    if(valueBool){
      setbuttonId(buttonId+1);
      console.log(dataActive);
      // setDataActive(uploadedFiles[button+1].preview);
    }else{
      setbuttonId(buttonId-1);
      // setDataActive(uploadedFiles[button+1].preview);
    }
    
  }, []);

  const [buttonId, setbuttonId] = useState(0); 
  
  return (
    <Container>
      <div className="containerData">
        <ContentImage>
          <TextImage>
            <span>SUA FOTO</span>
          </TextImage>
          <Data className="containerPhoto" url={dataActive}>
            <ButtonClick>
              <BsChevronLeft className="itemPhoto" onClick={() => {setbuttonId(0)}}/>
            </ButtonClick>
            <DataImage className="dataImagePhoto" />
          </Data>
        </ContentImage>
        <ContentList>
          <TextImage>
            <h1>{data[0].name}</h1>
          </TextImage>
        </ContentList>
        
        <ContentImage>
          <TextImage>
            <span>BANCO DE DADOS</span>
          </TextImage>
          <Data className="containerDB" url={data[0].urlDB}>
            <ButtonClick>
              <BsChevronRight className="itemDB" onClick={() => {handleFile(true)}} />
            </ButtonClick>
            <Carroussel data={responseData} buttonId={buttonId} />
          </Data>
        </ContentImage>
      </div>
      <FooterData>
        <p className="percentage">{data[0].percentage + '%'}</p>
        <LinearProgress
          className="barLinear"
          value={19.5}
          color="secondary"
          variant="determinate"
        />
        <Modal />
      </FooterData>
    </Container>
  );
};

export default ResultTopThree;
