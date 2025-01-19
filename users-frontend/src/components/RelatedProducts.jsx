import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem"; // Correct import for ProductItem

const RelatedProducts = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (Array.isArray(products) && products.length > 0) {
      let productsCopy = [...products]; // Copy the products array

      // Filter by category and subCategory
      productsCopy = productsCopy.filter(
        (item) => item.category === category && item.subCategory === subCategory
      );

      // Take only the first 5 products
      setRelated(productsCopy.slice(0, 5));
    }
  }, [products, category, subCategory]); // Added category and subCategory to dependencies

  return (
    <div className="my-24">
      <div className="text-center text-3xl py-2">
        <Title text1={"RELATED"} text2={"PRODUCTS"} />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {related.map((item) => (
          <ProductItem
            key={item._id} // Use a unique identifier for the key
            id={item._id}
            name={item.name}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
