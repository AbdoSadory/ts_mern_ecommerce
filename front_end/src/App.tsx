import { useState } from "react"
import heroImg from "./assets/hero.png"
import reactLogo from "./assets/react.svg"
import viteLogo from "./assets/vite.svg"
import "./App.css"
import { sampleProducts } from "./data"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <header>TS Amazon</header>
      <main>
        {sampleProducts.map((product) => (
          <div key={product.slug}>
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
          </div>
        ))}
      </main>
      <footer>All rights reserved</footer>
    </div>
  )
}

export default App
