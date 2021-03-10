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
  const { responseFile, uploadedFiles } = useFiles();
  const [buttonId, setbuttonId] = useState(0); 
  const [imagePreview, setImagePreview] = useState("");
  
  const responseData: any[] = [];

  responseFile.map((itemFile, indexFile) => {
    const fileItem = uploadedFiles[indexFile].preview;
    const objectFile: any[] = [
      indexFile,
      fileItem,
    ];
    const temp: any[] = [];
    itemFile.resuts.map((item, index) => {
      if( index < 3){
        temp.push(item);
      }
    });
    objectFile.push(temp);
    responseData.push(objectFile);
  });
  
  // Mudança do estado do button

  const handleFile = useCallback((valueBool: Boolean, dataFile) => {
    console.log(buttonId, valueBool);
    if((buttonId >= 0)){
      console.log("Entrou");
      if(valueBool){
        if(buttonId + 1 < responseFile.length)
          setbuttonId(buttonId+1);
          // setImagePreview(responseData[buttonId].fileItem);
        }else{
          setbuttonId(buttonId-1);
        }    
        setImagePreview(dataFile[buttonId][1]);
    }else{
      setbuttonId(0);
    }
  }, [buttonId, imagePreview]);
  
  return (
    <Container>
      <div className="containerData">
        <ContentImage>
          <TextImage>
            <span>SUA FOTO</span>
          </TextImage>
          <Data className="containerPhoto" url={imagePreview}>
            <ButtonClick>
              <BsChevronLeft className="itemPhoto" onClick={() => {handleFile(false, responseData)}}/>
            </ButtonClick>
            <DataImage className="dataImagePhoto" />
          </Data>
        </ContentImage>
        <ContentList>
          <TextImage>
            
          </TextImage>
        </ContentList>
        
        <ContentImage>
          <TextImage>
            <span>RESULTADOS</span>
          </TextImage>
          <Data className="containerDB" url={data[0].urlDB}>
            <ButtonClick>
              <BsChevronRight className="itemDB" onClick={() => {handleFile(true, responseData)}} />
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
