import { Link } from "react-router-dom";
import { Product } from "../../types";

const ProductItem = ({
  category,
  description,
  image,
  price,
  rating,
  title,
  id,
}: Product) => {
  return (
    <li className="product-item">
      <Link to={`/products/${id}`}>
        <p className="product-item__category">{category}</p>
        <p className="product-item__title">{title}</p>
        <img className="product-item__image" src={image} alt={description} />
        <span className="product-item__price">${price}</span>
        <span className="product-item__rating">
          {rating.rate} {rating.count}
        </span>
      </Link>
    </li>
  );
};

export default ProductItem;
