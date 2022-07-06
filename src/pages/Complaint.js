import {Col, Container, Row} from "react-bootstrap"
import GlobalNavbar from "./assetts/GlobalNavbar";

function Complaint(){
    return(
        <>
        <GlobalNavbar/>
        <Container>
        <Row>
    <Col xs={6} md={4}>
      xs=6 md=4
    </Col>
    <Col xs={6} md={4}>
      xs=6 md=4
    </Col>
    <Col xs={6} md={4}>
      xs=6 md=4
    </Col>
  </Row>
        </Container>
        </>
    )
}

export default Complaint