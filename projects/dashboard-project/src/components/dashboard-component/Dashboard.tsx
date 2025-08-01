 import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Dashboard.css';

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
};

function Dashboard() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.error('Error fetching products:', err);
      });
  }, []);

  return (
    <div className="dashboard">
      <h1>Product Dashboard</h1>
        <div className="product-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <p><strong>${product.price}</strong></p>
            </div>
          ))}
        </div>
    </div>
  );
}

export default Dashboard;
