import { Col, Container, Nav, Navbar, Row } from "react-bootstrap"
import { sampleProducts } from "./data"

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
      <main className="container my-3">
        <Row>
          {sampleProducts.map((product) => (
            <Col
              key={product.slug}
              className="product-card d-flex flex-column vh-100"
              sm={6}
              md={4}
              lg={3}
            >
              <h2>{product.name}</h2>
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              <p>
                Rating: {product.rating} ({product.numReviews} reviews)
              </p>
            </Col>
          ))}
        </Row>
      </main>
      <footer className="bg-dark text-white text-center py-3 mt-3">
        <div>All rights reserved</div>
      </footer>
    </div>
  )
}

export default App
