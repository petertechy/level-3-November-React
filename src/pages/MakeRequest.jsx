import axios from "axios";
import React, { useEffect, useState } from "react";

const MakeRequest = () => {
  const [product, setproduct] = useState([]);
  const [loading, setloading] = useState(true);
  const fetchProduct = () => {
    const url = "https://fakestoreapi.com/products";
    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        setloading(false)
        setproduct(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <>
      <div>
        <h1>Make Request</h1>
        <button onClick={fetchProduct}>Make Request</button>
      </div>
      <hr />

      {loading ? (
        <div className="spinner-border m-5" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        product.map((products, index) => (
          <div key={index}>
            <img src={products.image} alt={products.title} width={250} />
            <h1>{products.title}</h1>
            <p>{products.description}</p>
            <p style={{ background: "black", color: "white" }}>
              {products.price}
            </p>
          </div>
        ))
      )}
    </>
  );
};

export default MakeRequest;
