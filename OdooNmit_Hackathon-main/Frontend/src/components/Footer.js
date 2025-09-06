import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer className='modern-footer mt-5'>
      <div className='footer-gradient'>
        <Container>
          <Row className='py-5'>
            <Col md={4} className='mb-4'>
              <h5 className='text-white mb-3'>
                <i className='fas fa-shopping-bag me-2'></i>
                MarketPlace
              </h5>
              <p className='text-light opacity-75'>
                Your trusted marketplace for quality products and amazing deals. 
                Connect with sellers and discover unique items.
              </p>
              <div className='social-links'>
                <a href='#' className='social-link me-3'>
                  <i className='fab fa-facebook-f'></i>
                </a>
                <a href='#' className='social-link me-3'>
                  <i className='fab fa-twitter'></i>
                </a>
                <a href='#' className='social-link me-3'>
                  <i className='fab fa-instagram'></i>
                </a>
                <a href='#' className='social-link'>
                  <i className='fab fa-linkedin-in'></i>
                </a>
              </div>
            </Col>
            <Col md={2} className='mb-4'>
              <h6 className='text-white mb-3'>Quick Links</h6>
              <ul className='footer-links'>
                <li><a href='#'>About Us</a></li>
                <li><a href='#'>Contact</a></li>
                <li><a href='#'>Help Center</a></li>
                <li><a href='#'>Privacy Policy</a></li>
              </ul>
            </Col>
            <Col md={2} className='mb-4'>
              <h6 className='text-white mb-3'>Categories</h6>
              <ul className='footer-links'>
                <li><a href='#'>Electronics</a></li>
                <li><a href='#'>Fashion</a></li>
                <li><a href='#'>Home & Garden</a></li>
                <li><a href='#'>Sports</a></li>
              </ul>
            </Col>
            <Col md={2} className='mb-4'>
              <h6 className='text-white mb-3'>Seller</h6>
              <ul className='footer-links'>
                <li><a href='#'>Start Selling</a></li>
                <li><a href='#'>Seller Guide</a></li>
                <li><a href='#'>Fees</a></li>
                <li><a href='#'>Support</a></li>
              </ul>
            </Col>
            <Col md={2} className='mb-4'>
              <h6 className='text-white mb-3'>Connect</h6>
              <ul className='footer-links'>
                <li><a href='#'>Newsletter</a></li>
                <li><a href='#'>Blog</a></li>
                <li><a href='#'>Community</a></li>
                <li><a href='#'>Events</a></li>
              </ul>
            </Col>
          </Row>
          <hr className='footer-divider' />
          <Row className='py-3'>
            <Col md={6} className='text-center text-md-start'>
              <p className='text-light opacity-75 mb-0'>
                <i className='fas fa-copyright me-1'></i>
                {new Date().getFullYear()} OdooNmit Hackathon. All rights reserved.
              </p>
            </Col>
            <Col md={6} className='text-center text-md-end'>
              <p className='text-light opacity-75 mb-0'>
                <i className='fas fa-heart text-danger me-1'></i>
                Made with love for the community
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  )
}

export default Footer
