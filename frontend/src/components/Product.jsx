import React from 'react';
import { Card } from 'react-bootstrap';
import "../custom-css/product.css"

const Product = ({ product }) => {
    return (
      <Card className='my-3 p-3 rounded product-card'>
        <a href={`/product/${product._id}`}>
          <Card.Img src={product.image} variant='top' />
        </a>
        <Card.Body className='product-card-body'>
          <a href={`/product/${product._id}`}>
            <Card.Title as='div' className='product-title'>
              <strong>{product.name}</strong>
            </Card.Title>
          </a>
          <Card.Text as='div' className='product-rating'>
            <div className='my-3'>
              {product.rating} from {product.numReviews} reviews
            </div>
          </Card.Text>
          <Card.Text as='h3' className='product-price'>
            ${product.price}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }

export default Product;
