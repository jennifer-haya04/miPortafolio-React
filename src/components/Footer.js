import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/linkedin-icon.svg";
import navIcon2 from "../assets/img/git-icon.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container fluid>
        <Row className="align-items-center">
          <Col className="text-center text-sm-center align-self-center">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/jennifer-haya-portocarrero-335381177/"
                target="_blank"
              >
                <img src={navIcon1} alt="Icono Linkedin" />
              </a>
              <a href="https://github.com/jennifer-haya04" target="_blank">
                <img src={navIcon2} alt="Icono Github" />
              </a>
            </div>
            <p>Copyright 2023. All Rights Reserved by Jennifer Haya</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
