import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {SiQuantconnect} from 'react-icons/si'
import {FiSearch} from 'react-icons/fi'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  const [stickTop, setStickTop] = useState(false)

  useEffect(() => {
    function handleNav(){
      if(window.scrollY >= 1){
        setStickTop(true)
      }else{
        setStickTop(false)
      }
    }
    window.addEventListener('scroll', handleNav)

    return () => {
      window.removeEventListener('scroll', handleNav)
    }
  }, [])
  return (
    <header className={`header py-5 sticky-top ${stickTop && 'active-stick-top'}`}>
      <Navbar expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to='/' className="text-decoration-none text-dark d-flex align-items-center gap-2">
            <SiQuantconnect size={50} />
            <span className="text-uppercase">quant</span>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav-list">
            <Nav.Link href="#home">Who</Nav.Link>
            <Nav.Link href="#link">What</Nav.Link>
            <Nav.Link href="#link">How</Nav.Link>
            <Nav.Link href="#link">Why</Nav.Link>
            <NavDropdown title="About" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Sign In</Nav.Link>
            <Nav.Link href="#link"><FiSearch /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  );
}
export default Header;
