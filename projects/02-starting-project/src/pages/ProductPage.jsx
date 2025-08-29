import { Link } from "react-router-dom";

const products = [
  { id: "p1", title: "Product1" },
  { id: "p2", title: "Product2" },
  { id: "p3", title: "Product3" },
  { id: "p4", title: "Product4" },
];

const ProductPage = () => {
  return (
    <>
      <h2>This is a Product page.</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductPage;
