import "./OneProduct.css"
import PropTypes from "prop-types"
import { Link } from "react-router-dom";
import formatPrice from "../function/FormatPrice";

const OneProduct = ({id, image, brand, fullName, price, styleColor}) => {
  return (
    <>
      <div className="one-product" style={{'--style-color': `${styleColor}`}}>
        <img src={image} alt={fullName} />
        <p>{brand}</p>
        <h2>{fullName}</h2>
        <div className="info">
          <p>{formatPrice(price)}</p>
          <Link to={`/info/${id}`}>Info</Link>
        </div>
      </div>
    </>
  )
}

// Validace props
OneProduct.propTypes = {
  id:PropTypes.number.isRequired,
  image:PropTypes.string.isRequired,
  brand:PropTypes.string.isRequired,
  fullName:PropTypes.string.isRequired,
  price:PropTypes.number.isRequired,
  styleColor:PropTypes.string.isRequired,
}

export default OneProduct