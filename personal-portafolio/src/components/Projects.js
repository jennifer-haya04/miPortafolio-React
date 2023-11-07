import { Container, Nav, Row, Tab, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-vet.png";
import projImg2 from "../assets/img/project-cinestar.png";
import projImg3 from "../assets/img/project-MEAN.png";

import gif from "../assets/img/ayuda-ecolar.gif";
import { PortafolioCard } from "./PortafolioCard";

export const Projects = () => {

  const projects = [
    {
      title: "Veterinaria Web",
      description : "Rest Api con Spring Boot",
      imgUrl: projImg1,
      gitUrl: "https://github.com/jennifer-haya04/ClienteVeterinaria"
    },
    {
      title: "Cinestar",
      description : "Replica de Cinestar usando Python y Flask",
      imgUrl: projImg2,
      gitUrl: "https://github.com/jennifer-haya04/WebCineStar_Python"
    },
    {
      title: "Portafolio Web",
      description : "Proyecto usando Mongo, Express, Angular y Node.js",
      imgUrl: projImg3,
      gitUrl: "https://github.com/jennifer-haya04/proyectoMEAN"
    }
  ]

 return(
  <section className="project" id="projects">
    <Container>
      <Row>
        <Col>
        <h2>Mis Proyectos</h2>
        <p>Como parte de mi aprendizaje continuo, he podido realizar diferentes proyectos donde se puede apreciar mis conocimientos adquiridos. La mejor forma de aprender es haciendo, en este caso desarrollando.</p>
        <Tab.Container id="projects-tabs" defaultActiveKey="first">
          <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab"> 
            <Nav.Item>
              <Nav.Link eventKey="first">Web</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Mobile</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">Actual</Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <Row>
                {
                  projects.map((project, index) => {
                    return(
                      <ProjectCard
                      key={index}
                      {...project}
                      />
                    )
                  })
                }
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <Row >
                <div>
                  <p>En desarrollo...</p>
                  <img className="animated" src={gif}/>
                </div>
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="third">
              <Row>
                <PortafolioCard/>
              </Row>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
        </Col>
      </Row>
    </Container>
  </section>
 )
}