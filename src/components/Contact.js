import { useState } from "react";
import contactImg from "../assets/img/contact-img.svg";
import { Col, Container, Row } from "react-bootstrap";

export const Contact = () => {

  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  }

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Enviar");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) =>{
    setFormDetails({
      ...formDetails,
      [category]: value
    })
  }

  const handlerSubmit = async(e) => {
    e.preventDefault();
    setButtonText("Enviando...");
    let response = await fetch("https://resendv1-q5h0s4v3.b4a.run/contact", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Enviado");
    setFormDetails(formInitialDetails);
    if(response.status === 200){
      setStatus({ success:true, message: "***Mensaje enviado correctamente"});
    }else{
      setStatus({ success:false, message: "***Algo salió mal, por favor intentelo de nuevo mas tarde"});
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="Contactar"/> 
          </Col>
          <Col md={6}>
            <h2>Contáctame</h2>
            <form onSubmit={handlerSubmit}>
              <Row>
                <Col sm={6} className="px-1">
                  <input type="text" value={formDetails.firstName} placeholder="Nombre" onChange={(e) => onFormUpdate("firstName", e.target.value) }/>
                </Col>
                <Col sm={6} className="px-1">
                  <input type="text" value={formDetails.lastName} placeholder="Apellidos" onChange={(e) => onFormUpdate("lastName", e.target.value) }/>
                </Col>
                <Col sm={6} className="px-1">
                  <input type="email" value={formDetails.email} placeholder="Correo" onChange={(e) => onFormUpdate("email", e.target.value) }/>
                </Col>
                <Col sm={6} className="px-1">
                  <input type="tel" value={formDetails.phone} placeholder="Celular" onChange={(e) => onFormUpdate("phone", e.target.value) }/>
                </Col>
                <Col sm={6} className="px-1">
                  <textarea row="6" value={formDetails.message} placeholder="Mensaje" onChange={(e) => onFormUpdate("message", e.target.value)}></textarea>
                  <button type="submit"><span>{buttonText}</span></button>
                </Col>
                {
                  status.message &&
                  <Col>
                  <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                  </Col>
                }
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}