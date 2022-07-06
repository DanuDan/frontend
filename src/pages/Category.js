import {Table, Container, Button} from "react-bootstrap"
import GlobalNavbar from "./assetts/GlobalNavbar";
import {useState} from "react";
import data from "./assetts/dummyData"

function Category() {

  const [datas] = useState(data)

    return(
        <>
        <GlobalNavbar/>
        
        <h5 className="mt-5 mb-5 white" style={{margin:'6rem'}}>List Category</h5>

<Container>
<Table striped hover className="white">
<tbody>
<tr>
  <th className="row-table">No</th>
  <th className="row-table">Category Name</th>
  <th>Action</th>
</tr>
{datas.map((data, idx) => (
<tr>
  <td>{idx}</td>
  <td>{data.categoryname}</td>
  <td><Button className="edit-button">Edit</Button> <Button className="delete-button">Delete</Button></td>
</tr>
))}
</tbody>
</Table>        
</Container>
        
        
        
        
        </>
    )
}

export default Category