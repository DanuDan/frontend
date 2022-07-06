
import {Card, Form, Button, Container, Row, Col} from "react-bootstrap"
import image from "./assetts/logo.png"
import {useNavigate} from "react-router-dom"
import { useEffect } from "react";

function Login(){
  const navigate=useNavigate();

  const handleNavigateToHomepage = function(){
    navigate('/')
  }

  useEffect(function(){
    console.log("Login Component Did Mount")

    return function(){
        console.log("Login Component Will Unmount")
    }
},[])

    return(
      <>
      <Container className="p-0 m-0">
    <Row>
      <Col>   
      <img src={image} alt="" className="logo"/>      
      <h1 className="color-font-h mt-5">Easy, Fast and Reliable</h1>
      <p className="color-font-p mt-3">Go shopping for merchandise, just go to dumb merch shopping.
        the biggest merchandise in Indonesia</p>
      <Button className ="button-login-register mt-5 mb-5" href="#">Login</Button>
      <Button className ="button-login-register ms-3 mt-5 mb-5" href="#">Register</Button>
      </Col>

    <Col>    
    <Card.Body className="card-body">
      <Card.Title className="login ms-3 mt-4 fs-3">Login</Card.Title>
        <Form.Control className="email ms-3 me-3 mt-4" type="email" placeholder="Enter email" />
        <Form.Control className="password ms-3 me-3 mt-3" htmlFor="inputPassword5"
          type="password"
          id="inputPassword5"
          placeholder='Enter password'
          aria-describedby="passwordHelpBlock"/>
          <Button className="submit ms-3 me-3 mt-5 mb-2" type="submit" onClick={handleNavigateToHomepage}>Login</Button>
    </Card.Body>
      </Col>
    </Row>
  </Container>
    </>
    )}


export default Login