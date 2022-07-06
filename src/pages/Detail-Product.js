import { Card, Row, ListGroup, Col, Container, ListGroupItem, Button} from "react-bootstrap"
import GlobalNavbar from "./assetts/GlobalNavbar.js"
import image from "./assetts/Mouse.png"

function DetailProduct (){
    return (
        <>
        <GlobalNavbar/>
    
    <Container>
        <Card className="bg-color1 mt-5">
            <Row>
              <Col>
                <Card.Img className="pic-detail-product" src={image} alt=""/>
              </Col>
              <Col>
            <ListGroup><h3 className="name-product orange">Mouse</h3><ListGroupItem className="stock-detail white ps-0 bg-color1">Stock: 500</ListGroupItem></ListGroup>
                <Col>
                <ListGroup className="white bg.color">
                    <ListGroupItem className="note-detail white mt-4 pt-2 p-0 bg-color1"> - Wireless mouse </ListGroupItem>
                    <ListGroupItem className="note-detail white p-0 bg-color1"> - Konektivitas wireless 2.4 GHz </ListGroupItem>
                    <ListGroupItem className="note-detail white p-0 bg-color1"> - Jarak wireless hingga 10 m </ListGroupItem>
                    <ListGroupItem className="note-detail white p-0 bg-color1"> - Plug and Play </ListGroupItem>
                    <ListGroupItem className="note-detail white p-0 mb-3 bg-color1"> - Baterai tahan hingga 12 bulan </ListGroupItem>
                </ListGroup>
                </Col>
                <Col className="description-detail mt-3 white"><text> Mouse Wireless Alytech AL - Y5D, hadir dengan desain 3 tombol mouse yang ringan dan mudah dibawa.
                    Mouse ini menggunakan frekuensi radio 2.4GHz (bekerja hingga jarak 10m) dan 
                    fitur sensor canggih optik pelacakan dengan penerima USB yang kecil.
                    Mouse ini didukung oleh 1x baterai AA (hingga 12 bulan hidup baterai).
                    mendukung sistem operasi Windows 7,8, 10 keatas, Mac OS X 10.8 atau yang lebih baru dan sistem operasi Chrome OS.</text>
                </Col>
                <Col className="price-detail mt-4 pt-4 orange d-flex justify-content-end">
                <h3>Rp.1.500.000, </h3>
                </Col>
                <Col className="d-grid gap-2 mt-4" type="submit"><Button className="buy-detail">Buy</Button>
                </Col>
            </Col>
        </Row>




        </Card>
    </Container>
        </>





    )}


export default DetailProduct