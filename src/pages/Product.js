import {Table, Container, Button} from "react-bootstrap"
import GlobalNavbar from "./assetts/GlobalNavbar";
import {useState} from "react"
import data from './assetts/dummyData';

function Product(){

    const [datas] = useState(data)


    return(
        <>
        <GlobalNavbar/>

        <h5 className="mt-5 mb-5 white" style={{margin:'6rem'}}>List Product</h5>

        <Container>
        <Table striped hover className="white">
      <tbody>
      <tr>
          <th>NO</th>
          <th>Photo</th>
          <th>Product Name</th>
          <th>Product Desc</th>
          <th>Price</th>
          <th>Qty</th>
          <th>Action</th>
        </tr>
        {datas.map((data, idx) => (
          <tr>
          <td>{idx}</td>
          <td>{data.image}</td>
          <td>{data.productname}</td>
          <td>{data.productdesc}</td>
          <td>{data.price}</td>
          <td>{data.qty}</td>
          <td><Button className="edit-button">Edit</Button> <Button className="delete-button">Delete</Button></td>
        </tr>
        ))}
      </tbody>
    </Table>        
    </Container>
        
        </>
    )
}  


export default Product