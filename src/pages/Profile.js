import { Card, Row, ListGroup, Col, Container,} from "react-bootstrap"
import GlobalNavbar from "./assetts/GlobalNavbar.js"
import image from "./assetts/JasonMomoaPicProfile.jpg"
import ImageLogo from "./assetts/LogoFrame.png"
import ImageItem from "./assetts/Mouse.png"

function Profile(){
    return (
    <>

      <GlobalNavbar/>
      
      <Col className ="d-flex mt-5 mb-5">
      <label className="label-name">My Profile</label>
      <label className="label-name-transaction"> My Transaction</label> </Col>


  <Container as={Col} className="profile-container d-flex g-0">
    <div className="profile-body d-flex">
    <img className ="pic-profile" src={image} alt=""/>

      <Card className="card-profile ms-3 mb-5 d-flex">
    <ListGroup>
      <ListGroup> NAME <ListGroup.Item className="profile-list mt-2 mb-4">Jason Momoa</ListGroup.Item> </ListGroup>
      <ListGroup> EMAIL <ListGroup.Item className="profile-list mt-2 mb-4">jasonmomoa@mail.com</ListGroup.Item> </ListGroup>
      <ListGroup> PHONE <ListGroup.Item className="profile-list mt-2 mb-4">08787878</ListGroup.Item> </ListGroup>
      <ListGroup> GENDER <ListGroup.Item className="profile-list mt-2 mb-4">Male</ListGroup.Item> </ListGroup>
      <ListGroup> ADDRESS <ListGroup.Item className="profile-list mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's </ListGroup.Item> </ListGroup>
    </ListGroup>
    </Card>

      <Col>
      <Card className="transaction-card ms-5 mt-2 g-4">
        <Row className="transaction-content ms-5 p-0">
        <Card.Img  className="transaction-image p-0 ms-2 me-1"src={ImageItem} alt='...'/>
              <Col className= "item-list ps-0 p-0 mt-2 mb-2 bg-color">
                <h5 className = "item orange bg-color">
                    MOUSE
                </h5>
                    <small className='date orange bg-color'> 06 Juni 2022 </small>
                    <p className="bg-color">
                     <small className='price white bg-color'>Price : 500000</small>
                    </p>
                    <p className="bg-color">
                    <small className='subtotal white bg-color'>Sub Total : 500000</small>
                  </p>
              </Col>
          <Card.Img className="transaction-logo p-0 ms-4 me-4 bg-color"src={ImageLogo} alt='...'/>
        </Row>
        </Card>
        </Col>
        </div>
      </Container>
    </>
    )}

export default Profile