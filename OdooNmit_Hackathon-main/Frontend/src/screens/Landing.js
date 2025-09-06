import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Button, Container } from 'react-bootstrap'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Product from '../components/Product'
import Paginate from '../components/Paginate'
import Meta from '../components/Meta'
import { listProducts } from '../actions/productActions'
import { PRODUCT_CREATE_RESET } from '../types/productConstants'
const Landing = ({  match }) => {
  const keyword = match.params.keyword
  const pageNumber = match.params.pageNumber || 1
  const dispatch = useDispatch()
  const productList = useSelector((state) => state.productList)
  const { loading, error, products, page, pages } = productList
  const userLogin = useSelector((state) => state.userLogin)
  const { userData } = userLogin

  useEffect(() => {
    dispatch({ type: PRODUCT_CREATE_RESET })

    dispatch(listProducts(keyword, pageNumber))
  }, [dispatch, keyword, pageNumber])

  return (
    <>
      <Meta />
      
      {/* Hero Section */}
      {!keyword && (
        <div className='hero-section fade-in-up'>
          <Container>
            <Row className='text-center'>
              <Col>
                <h1 className='hero-title'>
                  <i className='fas fa-shopping-bag me-3'></i>
                  Discover Amazing Products
                </h1>
                <p className='hero-subtitle'>
                  Find the best deals on quality items from trusted sellers in our marketplace
                </p>
                <div className='d-flex justify-content-center gap-3 flex-wrap'>
                  <LinkContainer to={userData ? '/createproduct' : '/login'}>
                    <Button size='lg' className='btn-primary px-4 py-3'>
                      <i className='fas fa-plus me-2'></i>
                      Start Selling
                    </Button>
                  </LinkContainer>
                  <Button size='lg' variant='outline-light' className='px-4 py-3'>
                    <i className='fas fa-search me-2'></i>
                    Browse Products
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      )}
      
      <Container>
        {keyword && (
          <div className='mb-4'>
            <Link className='btn btn-success' to='/'>
              <i className='fas fa-arrow-left me-2'></i>
              Back to Home
            </Link>
          </div>
        )}
        
        {/* Products Section Header */}
        <Row className='align-items-center mb-4'>
          <Col>
            <div className='d-flex align-items-center'>
              <h2 className='text-gradient mb-0'>
                {keyword ? `Search Results for "${keyword}"` : 'Latest Products'}
              </h2>
              {!keyword && (
                <span className='badge bg-gradient text-white ms-3 pulse-animation'>
                  <i className='fas fa-fire me-1'></i>
                  Hot Deals
                </span>
              )}
            </div>
            {products && (
              <p className='text-muted mt-2 mb-0'>
                <i className='fas fa-box me-1'></i>
                {products.length} {products.length === 1 ? 'product' : 'products'} available
              </p>
            )}
          </Col>
          <Col xs='auto'>
            <LinkContainer to={userData ? '/createproduct' : '/login'}>
              <Button className='btn-primary'>
                <i className='fas fa-plus me-2'></i>
                <span className='d-none d-md-inline'>List Your Product</span>
                <span className='d-md-none'>Sell</span>
              </Button>
            </LinkContainer>
          </Col>
        </Row>
        
        {/* Products Grid */}
        {loading ? (
          <div className='text-center py-5'>
            <Loader />
            <p className='mt-3 text-muted'>Loading amazing products...</p>
          </div>
        ) : error ? (
          <Message variant='danger'>
            <i className='fas fa-exclamation-triangle me-2'></i>
            {error}
          </Message>
        ) : (
          <>
            {products && products.length > 0 ? (
              <>
                <Row className='g-4'>
                  {products.map((product, index) => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                      <div style={{ animationDelay: `${index * 0.1}s` }}>
                        <Product product={product} />
                      </div>
                    </Col>
                  ))}
                </Row>
                <div className='mt-5'>
                  <Paginate
                    pages={pages}
                    page={page}
                    keyword={keyword ? keyword : ''}
                  />
                </div>
              </>
            ) : (
              <div className='text-center py-5'>
                <i className='fas fa-search fa-3x text-muted mb-3'></i>
                <h4 className='text-muted'>No products found</h4>
                <p className='text-muted'>Try adjusting your search or browse our categories</p>
                <Link to='/' className='btn btn-primary'>
                  <i className='fas fa-home me-2'></i>
                  Go to Homepage
                </Link>
              </div>
            )}
          </>
        )}
      </Container>
    </>
  )
}
export default Landing
