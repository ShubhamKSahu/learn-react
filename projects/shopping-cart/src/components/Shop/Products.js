import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
const dummy_products = [
  {
    id: 1,
    title: "Wireless Headphones",
    price: 2999,
    description: "High-quality Bluetooth headphones with noise cancellation."
  },
  {
    id: 2,
    title: "Gaming Mouse",
    price: 1499,
    description: "Ergonomic gaming mouse with customizable DPI settings."
  },
  {
    id: 3,
    title: "Office Chair",
    price: 7999,
    description: "Comfortable office chair with adjustable height and lumbar support."
  },
  {
    id: 4,
    title: "Coffee Mug",
    price: 299,
    description: "Ceramic coffee mug with a sleek matte finish."
  },
  {
    id: 5,
    title: "Notebook",
    price: 99,
    description: "Soft-cover notebook with 200 ruled pages."
  },
];



  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {dummy_products.map((product) => (
          <ProductItem
            key= {product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
