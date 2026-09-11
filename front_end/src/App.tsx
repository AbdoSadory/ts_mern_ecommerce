import { Col, Container, Nav, Navbar, Row } from "react-bootstrap"
import HomePage from "./pages/HomePage"
import { Outlet } from "react-router-dom"

function App() {
  return (
    <div>
      <header>
        <Navbar bg="dark" variant="dark" expand="lg" className="px-3">
          <Container>
            <Navbar.Brand>TS Amazon</Navbar.Brand>
          </Container>
          <Nav>
            <a href="/cart" className="nav-link">
              Cart
            </a>
            <a href="/signin" className="nav-link">
              Sign In
            </a>
          </Nav>
        </Navbar>
      </header>
      <main className="container">
        <Outlet />
      </main>
      <footer className="bg-dark text-white text-center py-3">
        <div>All rights reserved</div>
      </footer>
    </div>
  )
}

export default App
