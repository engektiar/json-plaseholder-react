import React from "react";
import { useState } from "react";
import fakedata from "../../fakeData/products.json";
const Usestatejeson = () => {
  const first10 = fakedata.slice(0, 10);
  const [products, setProducts] = useState(first10);
  return (
    <div>
      <h2>ektiar hosen</h2>
      {products.map((pd) => (
        <li>{pd.name}</li>
      ))}
    </div>
  );
};

export default Usestatejeson;
