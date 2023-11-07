import { Col } from "react-bootstrap"
import { CodeSquare} from "react-bootstrap-icons"

export const ProjectCard = ({ title, description, imgUrl, gitUrl}) => {
  return(
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl}/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <button><a href={gitUrl} target="_blank"><CodeSquare/></a></button>
        </div>
      </div>
    </Col>
  )
}