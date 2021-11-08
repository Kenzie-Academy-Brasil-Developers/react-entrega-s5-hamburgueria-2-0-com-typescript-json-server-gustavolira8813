import { useContext, useEffect, useState } from "react";
import ProductCard from "../../components/productCard";
import { useCart } from "../../providers/cart";
import { useProduct } from "../../providers/product";

import { List } from "./styles";
const Home = () => {
  const { product, handleSearch } = useProduct();
  const { addProduct } = useCart();
  const [search, setSearch] = useState("");

  return (
    <>
      <h1>Fast Burguer</h1>
      <input
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Pesquisar"
      />
      <button onClick={() => handleSearch(search)}>pesquisar</button>
      <List>
        {product.map((e, i) => (
          <ProductCard type="home" key={i} product={e} callback={addProduct} />
        ))}
      </List>
    </>
  );
};
export default Home;
