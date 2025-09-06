import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Product = ({ product }) => {
  return (
    <>
      <Card className='product-card fade-in-up'>
        <div className='position-relative overflow-hidden'>
          <Link to={`/product/${product._id}`}>
            <Card.Img className='card-image' src={product.images[0].image1} />
          </Link>
          <div className='position-absolute top-0 end-0 m-2'>
            <span className='badge bg-gradient text-white px-3 py-2 rounded-pill'>
              <i className='fas fa-eye me-1'></i>
              View
            </span>
          </div>
        </div>
        <Card.Body className='p-4'>
          <Link to={`/product/${product._id}`}>
            <Card.Title as='div' className='name-label mb-3'>
              <strong>{product.name}</strong>
            </Card.Title>
          </Link>
          <div className='d-flex justify-content-between align-items-center'>
            <Card.Text as='div' className='price-tag mb-0'>
              Rs {product.Cost.price}
            </Card.Text>
            <Link to={`/product/${product._id}`} className='btn btn-primary btn-sm'>
              <i className='fas fa-shopping-cart me-1'></i>
              View Details
            </Link>
          </div>
        </Card.Body>
      </Card>
    </>
  )
}

export default Product
