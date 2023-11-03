import pdf from "../data/JenniferHaya-CV.pdf";
import { Col, Container, Row } from "react-bootstrap"
import { FileText } from "react-bootstrap-icons";
import headerImg from "../assets/img/programer.svg";
import { useEffect, useState } from "react";
import 'animate.css';
import TrackVisibility from "react-on-screen";

export const Banner = () =>{
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["-> Frontend", "-> FullStack", "-> Backend"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() + 100);
  const period = 2000;

  useEffect(() =>{
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker)};
  }, [text])

  const tick = () =>{
    let i = loopNum % toRotate.length;
    let fulltext = toRotate[i];
    let updatedText = isDeleting ? fulltext.substring(0, text.length - 1) : fulltext.substring(0, text.length + 1);

    setText(updatedText);

    if(isDeleting){
      setDelta(prevDelta => prevDelta/2)
    }

    if(!isDeleting && updatedText === fulltext){
      setIsDeleting(true);
      setDelta(period);
    }else if(isDeleting && updatedText === ""){
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }

  const downloadPdf = () => {
    const link = document.createElement("a");
    link.href = pdf;
    link.download = "Jennifer-Haya.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return(
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
            {({isVisible}) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Bienvenido a mi Portafolio</span>
                <h1>{"Hola, Soy Jennifer Haya"}<br/>
                <span className="wrap">{text}</span>
                </h1>
                <p>Estudiante de TI con experiencia en desarrollo de software en diversos lenguajes como Java, C#, Python y Go sumado a conocimiento en HTML, JavaScript, React, NodeJS y Angular. Manejo de bases de datos como SQL Server, MySql, Mongo DB, Oracle y Postgres. Me motiva asumir nuevos retos que me permitan ampliar mis conocimientos para seguir mejorando.</p>
                <button onClick={downloadPdf}>Descargar CV <FileText size={25}/></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Banner Img"/>
          </Col>
        </Row>
      </Container>
    </section>
  )
}