import {Container, Form, Button} from "react-bootstrap"
import GlobalNavbar from "./assetts/GlobalNavbar";

function Editprofile(){

    return(
        <>
        <GlobalNavbar/>
        
        <h5 className="mt-5 mb-5 white" style={{margin:'6rem'}}>Edit Profile</h5>


        <Container>
        <Form>
        <Form.Group id="upload-photo" className="mt-5 mb-3">
        <Form.Control className ="edit-form" type="file"/>
        </Form.Group>
        <Form.Group className="mb-3" id="edit-name">
        <Form.Control className="edit-form"type="text" placeholder="Name" />
      </Form.Group>
      <Form.Group className="mb-3" id="edit-email">
        <Form.Control className="edit-form" type="email" placeholder="Email" />
      </Form.Group>
      <Form.Group className="mb-3" id="edit-phone">
        <Form.Control className ="edit-form" type="text" placeholder="Phone" />
      </Form.Group>
      <Form.Group className="mb-3">
      <Form.Select className="edit-form" aria-label="Default select example">
      <option>Gender</option>
      <option value="1">Male</option>
      <option value="2">Female</option>
    </Form.Select>
    </Form.Group>
      <Form.Group className="mb-3" id="Address">
        <Form.Control className="edit-form" as="textarea" placeholder="Address" rows={3} />
      </Form.Group>
      <Button className="submit1"  type="submit">Save</Button>
        </Form>
        </Container>
    
    
    
    
    
    
    
    
    
    </>
    )
}

export default Editprofile