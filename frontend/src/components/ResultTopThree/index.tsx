import React, { useEffect, useState } from 'react';

// [+] Bibliotecas

// Icon(s)
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';

// Progress Bar
import LinearProgress from '@material-ui/core/LinearProgress';
import Modal from './Modal';
import { useFiles, IDragDrop } from '../../interfaces';

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
  const { uploadedFiles: files } = useFiles();
  const [dataActive, setDataActive] = useState<IDragDrop[]>([]);

  useEffect(() => {
    setDataActive(files);
  }, [files]);


  return (
    <Container>
      <div className="containerData">
        <ContentImage>
          <TextImage>
            <span>SUA FOTO</span>
          </TextImage>
          <Data className="containerPhoto" url={data[0].url}>
            <ButtonClick>
              <BsChevronLeft className="itemPhoto" />
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
              <BsChevronRight className="itemDB" />
            </ButtonClick>
            <Carroussel />y
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
