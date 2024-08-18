import { BrowserRouter, Routes, Route } from "react-router-dom"
import AllProducts from "./pages/allProducts/AllProducts"
import ProductDetail from "./pages/productDetails/ProductDetails"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <AllProducts /> } />
          <Route path="info/:movieId" element={ <ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App