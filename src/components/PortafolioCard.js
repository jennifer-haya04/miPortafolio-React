import { Container, Row, Col } from 'react-bootstrap';
import projImg4 from "../assets/img/portafolio.png";
import { CodeSquare} from "react-bootstrap-icons";

export const PortafolioCard = () => {
  return (
    <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <img src={projImg4}/>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <h2>Mi Portafolio</h2>
            <p>Proyecto React, uso de Resend para el envió de correos y despliegue en Back4App.</p>
            <button className='btnPortafolio'><a href="https://github.com/jennifer-haya04/miPortafolio-React" target="_blank"><CodeSquare/></a></button>
          </Col>
        </Row>
      </Container>
  );
};
