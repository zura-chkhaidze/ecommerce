import React from 'react'
import {Card} from 'react-bootstrap'
import * as PropTypes from "prop-types";


function Strong(props) {
    return null;
}

Strong.propTypes = {children: PropTypes.node};

function Product({product}) {
    return (
        <Card className='my-3 p-3  rounded'>
            <a href={'/product/${product._id}'}>
                <Card.Img src={product.image}/>
            </a>
            <Card.Body>
                <a href={'/product/${product._id}'}>
                    <Card.Title as='div'>
                        <strong>{product.name}</strong>
                    </Card.Title>
                    <Card.Text as='div'>
                        <div className='my-3'>
                            {product.rating} from {product.numReviews} Rewiews

                        </div>

                    </Card.Text>
                    <Card.Text as='h3'>
                        ${product.price}

                    </Card.Text>


                </a>
            </Card.Body>

        </Card>

    )
}

export default Product