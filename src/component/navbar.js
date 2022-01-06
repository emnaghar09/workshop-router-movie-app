import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap'; 
import './navbar.css';
import {Link} from 'react-router-dom';



function navbar() {
    return (
        <div>
<Navbar bg="light" expand="lg">
  <Container className='navbar'>


        <Nav.Link as={Link} to='/'>Home</Nav.Link>
        <Nav.Link href="#action1"  className="item">Movies </Nav.Link>
        <Nav.Link href="#action1" className="item" >Cartoons</Nav.Link>
        <Nav.Link href="#action1"  className="item">Series</Nav.Link>
        
  
    
  </Container>
</Navbar> 
        </div>
    )
}

export default navbar
