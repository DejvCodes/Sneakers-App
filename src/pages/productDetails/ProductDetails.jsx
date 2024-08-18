import "./ProductDetails.css"
import data from "../../data/data"
import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import formatPrice from "../../function/FormatPrice";

const ProductDetail = () => {
  const [product, setProduct] = useState(null)
  const {movieId} = useParams()

  useEffect(() => {
    const findProduct = data.find((oneProduct) => {
      return oneProduct.id === parseInt(movieId)
    })
    setProduct(findProduct)
  }, [movieId])

  // Pokud produkt neexistuje
  if (!product) {
    return <p>Načítání produktu...</p>
  }

  // Destructuring
  const {name, brand, type, price, image, images, season, info, productCode, styleColor } = product

  return (
    <>
      <section className="prodict-details-section">
        <div className="container">
          <div className="product-details" style={{'--style-color': `${styleColor}`,}}>
            <div className="all-images">
              <div className="main-image">
                <img src={image} alt={name} />
              </div>
              <div className="more-images">
                {images.map((oneImage, index) => {
                  return <img src={oneImage} alt={`${name} - další obrázek ${index + 1}`} key={index} />
                })}
              </div>
            </div>
            <div className="more-info">
              <p className="brand">{brand}</p>
              <h2 className="name">{name}</h2>
              <p className="type">{type}</p>
              <p className="price">{formatPrice(price)}</p>
              <p className="info">{info}</p>
              <div className="season">
              <p>Sezóna: {season ? season.join(', ') : "Neznámá sezóna"}</p>
              </div>
              <p className="product-code">Kód: {productCode}</p>
              <Link to="/">Zpět</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProductDetail