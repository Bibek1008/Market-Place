import React from 'react'
import { Route } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { logout } from '../actions/userActions'
import { useDispatch, useSelector } from 'react-redux'
import SearchBox from './SearchBox'
import { Navbar, Nav, Container, NavDropdown, Badge } from 'react-bootstrap'
const Header = () => {
  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const { userData } = userLogin
  const logoutHandler = () => {
    dispatch(logout())
  }
  return (
    <header className='sticky-top'>
      <Navbar className='navbar-modern' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand className='d-flex align-items-center'>
              <i className='fas fa-store me-2 text-gradient'></i>
              <span className='fw-bold'>MarketPlace</span>
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' className='border-0' />

          <Navbar.Collapse id='basic-navbar-nav'>
            <div className='mx-auto'>
              <Route render={({ history }) => <SearchBox history={history} />} />
            </div>

            <Nav className='ms-auto align-items-center'>
              {userData ? (
                <NavDropdown
                  title={
                    <span className='d-flex align-items-center'>
                      <i className='fas fa-user-circle me-2'></i>
                      <span className='d-none d-md-inline'>{userData.name}</span>
                      <Badge bg='success' className='ms-2 pulse-animation'>Online</Badge>
                    </span>
                  }
                  id='username'
                  className='user-dropdown'
                >
                  <NavDropdown.Item className='dropdown-item-modern'>
                    <LinkContainer to={`/admin/users/${userData._id}/edit`}>
                      <div>
                        <i className='fas fa-user-edit me-2'></i>
                        Profile Settings
                      </div>
                    </LinkContainer>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={logoutHandler} className='dropdown-item-modern text-danger'>
                    <i className='fas fa-sign-out-alt me-2'></i>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to='/login'>
                  <Nav.Link className='nav-link-modern'>
                    <i className='fas fa-sign-in-alt me-2'></i>
                    <span className='d-none d-md-inline'>Sign In</span>
                  </Nav.Link>
                </LinkContainer>
              )}
              {userData && userData.isAdmin && (
                <NavDropdown 
                  title={
                    <span>
                      <i className='fas fa-cog me-1'></i>
                      <span className='d-none d-md-inline'>Admin</span>
                    </span>
                  } 
                  id='adminmenu'
                  className='admin-dropdown'
                >
                  <NavDropdown.Item className='dropdown-item-modern'>
                    <LinkContainer to='/admin/userlist'>
                      <div>
                        <i className='fas fa-users me-2'></i>
                        Manage Users
                      </div>
                    </LinkContainer>
                  </NavDropdown.Item>
                  <NavDropdown.Item className='dropdown-item-modern'>
                    <LinkContainer to='/admin/productlist'>
                      <div>
                        <i className='fas fa-box me-2'></i>
                        Manage Products
                      </div>
                    </LinkContainer>
                  </NavDropdown.Item>
                </NavDropdown>
              )}
              <LinkContainer to='/about'>
                <Nav.Link className='nav-link-modern'>
                  <i className='fas fa-info-circle me-2'></i>
                  <span className='d-none d-md-inline'>About</span>
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
