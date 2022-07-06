import {Card, Container, Row} from "react-bootstrap"
import GlobalNavbar from "./assetts/GlobalNavbar";
import image from "./assetts/Mouse.png";
import {useNavigate} from "react-router-dom"

function Homepage(){
    const navigate=useNavigate();

    const handleNavigateToDetailProduct = function(){
      navigate('/detail-product')
    
    }    
    return(
        <>
        <GlobalNavbar/>

        <h5 className="mt-5 mb-5 orange" style={{margin:'7rem'}}>Product</h5>
        <Container className="container-product ms-5 d-flex">
         <Row className="ms-2">   
        <Card className="card-product bg-color ms-3 mb-2 p-0" style={{ width: '16rem' }}>
      <Card.Img src={image} />
        <Card.Title className="orange bg-color p-3 pb-0 pt-3"  style={{cursor:'pointer'}} onClick={handleNavigateToDetailProduct}>Mouse</Card.Title>
        <Card.Text className="price-product white bg-color p-3 pb-0 mb-1">
            Price: Rp.1.500.000,
        </Card.Text>
        <Card.Text className="stock-product white bg-color p-3 pt-0 mt-0">
            Stock: 500
        </Card.Text>
        </Card>
        

        <Card className="card-product bg-color ms-3 mb-2 p-0" style={{ width: '16rem' }}>
      <Card.Img src={image} />
        <Card.Title className="orange bg-color p-3 pb-0 pt-3">Mouse</Card.Title>
        <Card.Text className="price-product white bg-color p-3 pb-0 mb-1">
            Price: Rp.1.500.000,
        </Card.Text>
        <Card.Text className="stock-product white bg-color p-3 pt-0 mt-0">
            Stock: 500
        </Card.Text>
        </Card>

        <Card className="card-product bg-color ms-3 mb-2 p-0" style={{ width: '16rem' }}>
      <Card.Img src={image} />
        <Card.Title className="orange bg-color p-3 pb-0 pt-3">Mouse</Card.Title>
        <Card.Text className="price-product white bg-color p-3 pb-0 mb-1">
            Price: Rp.1.500.000,
        </Card.Text>
        <Card.Text className="stock-product white bg-color p-3 pt-0 mt-0">
            Stock: 500
        </Card.Text>
        </Card>

        <Card className="card-product bg-color ms-3 mb-2 p-0" style={{ width: '16rem' }}>
      <Card.Img src={image} />
        <Card.Title className="orange bg-color p-3 pb-0 pt-3">Mouse</Card.Title>
        <Card.Text className="price-product white bg-color p-3 pb-0 mb-1">
            Price: Rp.1.500.000,
        </Card.Text>
        <Card.Text className="stock-product white bg-color p-3 pt-0 mt-0">
            Stock: 500
        </Card.Text>
        </Card>
        </Row>
        </Container>
                
        </>
    )
}

export default Homepage