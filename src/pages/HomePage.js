import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import axios from 'axios';
const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/api/v1/auth/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Layout title={"Home - Decommerce app"}>
      <div>
        <h2>Product List</h2>
        <ul>
        {products.map((product) => (
          <li key={product._id}>
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
          </li>
        ))}
      </ul>
      </div>
    </Layout>
  );
};

export default HomePage;
