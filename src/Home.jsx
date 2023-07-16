import React, { useState } from "react";
import Header from "./Layout/Header";
import Content from "./Layout/Content";
import Footer from "./Layout/Footer";

function Home() {
  const [cart, addToCart] = useState([]);

  let addProduct = function (product) {
    const newProduct = [...cart];
    newProduct.push(product);
    addToCart(newProduct);
  };
  let removeProduct = function (product) {
    const newProduct = [...cart];

    addToCart(newProduct.filter((prod) => prod.id !== product.id));
  };
  return (
    <div>
      <Header onCart={cart} />
      <Content productSelected={removeProduct} productRemoved={addProduct} />
      <Footer />
    </div>
  );
}

export default Home;
