import React from "react";
import Cards from "./Cards";
import productlist from "./products.json";

function Content({ productSelected, productRemoved }) {
  return (
    <div className="container">
      <div className="row justify-content-md-center">
        {productlist.map((product) => (
          <Cards
            className="col col col-lg-2"
            product={product}
            key={product.id}
            productSelected={productSelected}
            productRemoved={productRemoved}
          />
        ))}
      </div>
    </div>
  );
}

export default Content;
