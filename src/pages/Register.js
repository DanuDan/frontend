import {Card, Row, Form, Button, Container, Col} from "react-bootstrap"
import image from "./assetts/logo.png"
// import {useNavigate} from "react-router-dom"
import {useState, useEffect} from "react"
import Login from './Login'

function Register(){
 
//  const navigate=useNavigate();

 // const handleNavigateToLogin = function(){
 //   navigate('/Login')
 // }
 const [state, setState] = useState({
  isLogin: false,
  user: {name: '', email: '', password: ''}
})


useEffect(function(){console.log("Register Component Did Mount")},[])

useEffect(function(){
  console.log("Register Component Did Update")},[state])

const handleOnSubmit = function(e){
  e.preventDefault()
  const name = document.getElementById('name').value
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value
  setState({
      isLogin: true,
      user: {name, email, password}
  })
}
   return(
      <>
      {state.isLogin ? <Login/> :
      (<>
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
    <Card.Title className="login ms-3 mt-4 fs-3">Register</Card.Title>
    <Form className="bg-color2" onSubmit = {handleOnSubmit}>
    <Form.Control className="username ms-3 me-3 mt-4" id="name" type="text" placeholder="Enter name" />
    <Form.Control className="email ms-3 me-3 mt-4" id="email" type="email" placeholder="Enter email" />
    <Form.Control className="password ms-3 me-3 mt-3" id="password" htmlFor="password"
      type="password"
      placeholder='Enter password'
      aria-describedby="passwordHelpBlock"/>
    <Button className="submit ms-3 me-3 mt-5 mb-2" type="submit">Register</Button>
    </Form>
    </Card.Body>
    </Col>
    </Row>
    </Container>
    </>)}
    </>
    )}


export default Register