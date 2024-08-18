import "./AllProducts.css"
import data from "../../data/data"
import { useState, useEffect } from "react"
import OneProduct from "../../components/OneProduct"

const AllProducts = () => {
  const [searchingProduct, setSearchingProduct] = useState("")
  const [filteredProducts, setFilteredProducts] = useState([])

  useEffect(() => {
    const productsAfterFilter = data.filter((oneProduct) => {
      return oneProduct.fullName.toLocaleLowerCase().includes(searchingProduct.toLocaleLowerCase())
    })
    setFilteredProducts(productsAfterFilter)
  }, [searchingProduct])

  return (
    <>
      <section>
        <div className="container">
          <h1>Vyhledat produkt</h1>
          <form>
            <input 
              type="text" 
              placeholder="Vyhledat produkt:"
              value={searchingProduct}
              onChange={(e) => setSearchingProduct(e.target.value)}
            />
          </form>
          <div className="all-products">
            {filteredProducts.map((oneProduct) => {
              return <OneProduct key={oneProduct.id} {...oneProduct} />
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default AllProducts