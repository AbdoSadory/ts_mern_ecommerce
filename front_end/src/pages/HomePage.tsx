import { Col, Row } from "react-bootstrap"
import { sampleProducts } from "../data"
import { Link } from "react-router-dom"

export default function HomePage() {
  return (
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
          <Link to={`/product/${product.slug}`} className="">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
          </Link>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <p>
            Rating: {product.rating} ({product.numReviews} reviews)
          </p>
        </Col>
      ))}
    </Row>
  )
}
