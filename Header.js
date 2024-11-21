import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Figure from 'react-bootstrap/Figure';


const Header = () => {
  return (
  
        <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
        <Container>
        <Navbar.Brand href="#home" className='mt-1'>
        <Figure>
      <Figure.Image
        width={40}
        height={40}
        alt="10x10"
        src={require('./images/tour.jpeg')}
        roundedCircle
        className='me-3 my-1'
      />
      </Figure>
        World Tourism</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end '> 
          <Nav>
            <Nav.Link href="#home" className='text-light'>Home</Nav.Link>
            <Nav.Link href="#link" className='text-light'>About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
   
  )
}

export default Header