import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">HR Equevu</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Apply</Nav.Link>
            <Nav.Link href="/admin">Admin</Nav.Link>
           
          </Nav>
        </Container>
      </Navbar>
      
    </>
  );
}

export default NavBar;