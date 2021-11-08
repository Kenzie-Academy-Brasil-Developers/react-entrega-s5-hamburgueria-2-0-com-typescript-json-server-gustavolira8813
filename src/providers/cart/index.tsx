import {
  useContext,
  createContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import api from "../../services";

interface CartProviderProps {
  children: ReactNode;
}
interface Product {
  img: string;
  id: number;
  name: string;
  category: string;
  price: number;
}
interface CartProviderData {
  cart: Product[];
  addProduct: (product: Product) => void;
  deleteProduct: (product: Product) => void;
}

const CartContext = createContext<CartProviderData>({} as CartProviderData);

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<Product[]>([]);

  const [cartToken] = useState(
    () => localStorage.getItem("@KenzieBurger:token") || ""
  );

  const addProduct = (product: Product) => {
    setCart([...cart, product]);
  };

  const deleteProduct = (productDeleted: Product) => {
    const newCart = cart.filter((product) => product.id !== productDeleted.id);
    setCart(newCart);
  };

  return (
    <CartContext.Provider value={{ cart, addProduct, deleteProduct }}>
      {children}
    </CartContext.Provider>
  );
};
export const useCart = () => useContext(CartContext);
