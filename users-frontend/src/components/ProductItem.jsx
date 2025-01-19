import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ProductItem = ({ id, name, price, image }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
      <div className="overflow-hidden">
        <img
          className="hover:scale-110 transition ease-in-out"
          src={image[0]} // Ensure `image` is an array with at least one element
          alt={name} // Use a meaningful `alt` for accessibility
        />
      </div>
      <p className="pt-3 pb-1 text-sm">{name}</p>
      <p className="text-sm font-medium">
        {currency}
        {price.toFixed(2)} {/* Format price to 2 decimal places */}
      </p>
    </Link>
  );
};

// Define PropTypes for type-checking
ProductItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // `id` can be string or number
  name: PropTypes.string.isRequired, // `name` should be a string
  price: PropTypes.number.isRequired, // `price` should be a number
  image: PropTypes.arrayOf(PropTypes.string).isRequired, // `image` should be an array of strings
};

// Default props (optional, if needed)
ProductItem.defaultProps = {
  image: ["/default-image.jpg"], // Provide a fallback image if `image` is empty
};

export default ProductItem;
