import React, { useCallback, useState } from 'react';
import { FaFilePdf } from 'react-icons/fa';
import {useFiles} from '../../../interfaces'
import Exemplo1 from '../../../assets/3553.png';
import Exemplo2 from '../../../assets/3872.png';
import Exemplo3 from '../../../assets/032017.png';

import {
  Container,
  ModalBox,
  TopThree,
  Info,
  Grafic,
  BarGrafic,
  ButtonBt,
} from './styles';

export interface ISelectTopProps {
  nameCietific: string ;
  namePop: string;
  img: string;
  id: number;
}

const Modal: React.FC = () => {
  const {responseFile} = useFiles();
  console.log(responseFile);
  const exemploTop = [
    {
      nameCietific: responseFile[0]? responseFile[0].resuts[0].name: ' teste' ,
      namePop:  responseFile[0]? responseFile[0].resuts[0].name: ' teste' ,
      img: Exemplo1,
      id: 1,
    },
    {
      nameCietific: 'cresdoceu2',
      namePop: 'avoro2',
      img: Exemplo2,
      id: 2,
    },
    {
      nameCietific: 'cresdoceu3',
      namePop: 'avoro3',
      img: Exemplo3,
      id: 3,
    },
  ];

  // const [selectTop, setSelectTop] = useState<ISelectTopProps[]>([])
  const [selectTop, setSelectTop] = useState<ISelectTopProps>(
    {}
  );

  const [show, setShow] = useState(false);

  const handleColse = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSelect = useCallback(
    id => {
      setSelectTop(exemploTop.find(elemento => elemento.id === id));
    },
    [exemploTop],
  );

  return (
    <Container>
      <ButtonBt onClick={handleShow}>detalhes</ButtonBt>
      <ModalBox contentClassName="teste" show={show} onHide={handleColse}>
        <ModalBox.Header closeButton>
          <ModalBox.Title>Detalhes</ModalBox.Title>
        </ModalBox.Header>
        <ModalBox.Body>
          {/* {selectTop.map((select)=>())} */}
          <TopThree idn={selectTop.id}>
            {exemploTop.map(item => (
              <button type="submit" onClick={() => handleSelect(item.id)}>
                <img key={item.id} src={item.img} alt="" />
              </button>
            ))}
          </TopThree>

          {/* <TopThree>
            <img src={Exemplo1} alt="" />
            <img src={Exemplo2} alt="" />
            <img src={Exemplo3} alt="" />
          </TopThree> */}
          <Info>
            <div className="names">
              <p>
                Nome cientifico:&nbsp;
                {selectTop.nameCietific}
              </p>
              <p>
                Nome popular:&nbsp;
                {selectTop.namePop}
              </p>
            </div>
            <div className="download">
              Relatorio PDF
              <FaFilePdf />
            </div>
          </Info>
          <Grafic>
            { !!responseFile[0] && responseFile[0].resuts.map((item)=>(
              <div key={item.name}className="content">
              <p>{item.percentage}</p>
              <BarGrafic percentage={item.percentage} />
              <p>{item.name}</p>
            </div>
            ))}
            
          </Grafic>
        </ModalBox.Body>
        {/* <ModalBox.Footer>
          <Button variant="secondary" onClick={handleColse}>
            Close
          </Button>
        </ModalBox.Footer> */}
      </ModalBox>
    </Container>
  );
};

export default Modal;
