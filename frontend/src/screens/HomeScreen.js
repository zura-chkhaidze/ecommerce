import {Row, Col} from "react-bootstrap";
import React from "react";
import products from '../products'
import Product from "../components/Product";
function HomeScreen() {
    return (
        <div>
            <h1>Latest Product</h1>
            <Row sm={12} md={6} lg={4} xl={3}>
                 {products.map(product =>(
                    <Col key ={product._id}>
                        <Product product={product}/>
                    </Col>))}
            </Row>
        </div>

    )
}

export default HomeScreen

