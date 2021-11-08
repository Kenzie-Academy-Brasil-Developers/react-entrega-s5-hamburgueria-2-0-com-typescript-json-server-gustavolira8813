import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import ProductCard from "../../components/productCard";
import { useCart } from "../../providers/cart";
import { Container } from "../cart/styles";
import { List } from "../home/styles";

const Cart = () => {
  const history = useHistory();
  const { deleteProduct } = useCart();
  const { cart } = useCart();

  const PriceTotal = () => {
    const value = cart
      .map((product) => Number(product.price))
      .reduce((a, b) => a + b, 0);
    return Math.round(value * 100) / 100;
  };

  return (
    <Container>
      <div className="cart-title">
        <span></span>
        <h1>Carrinho</h1>
        <h3>Sub-Total: {PriceTotal()}</h3>
      </div>

      {cart.length > 0 ? (
        <List>
          {cart.map((product, index) => (
            <li>
              <ProductCard
                key={index}
                type="cart"
                callback={deleteProduct}
                product={product}
              />
            </li>
          ))}
        </List>
      ) : (
        <p>
          Nenhuma item adicionado, confira nossas{" "}
          <a className="toHome" onClick={() => history.push("/")}>
            {" "}
            delícias
          </a>
        </p>
      )}
    </Container>
  );
};
export default Cart;
