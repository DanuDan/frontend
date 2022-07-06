import {Nav, Container, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import image from "./logo.png"


function GlobalNavbar(){
  return(
    <>
    
    <Navbar className="navbar">
    <Container fluid className="container-navbar">
    <Navbar.Brand> <Link to="/"> <img className ="logo-navbar ms-3" src={image} alt=""/> </Link></Navbar.Brand>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="navbar-content ms-auto me-3">
        <Nav.Link><Link className="navbar-link" to="/Complaint">Complaint</Link></Nav.Link>
        <Nav.Link><Link className="navbar-link" to="/Category">Category</Link></Nav.Link>
        <Nav.Link><Link className="navbar-link" to="/Product">Product</Link></Nav.Link>
        <Nav.Link><Link className="navbar-link" to="/Profile">Profile</Link></Nav.Link>
        <Nav.Link className="navbar-link" href="">Logout</Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </Container>
    </Navbar></>
  )}

export default GlobalNavbar