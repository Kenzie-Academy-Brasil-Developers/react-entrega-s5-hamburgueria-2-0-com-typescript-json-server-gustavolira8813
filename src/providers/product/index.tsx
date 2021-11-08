import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import api from "../../services";

interface Product {
  img: string;
  id: number;
  name: string;
  category: string;
  price: number;
}
interface ProductProps {
  children: ReactNode;
}
interface ProductProviderData {
  product: Product[];
  getProducts: () => void;
  handleSearch: (userInput: string) => void;
}

const ProductContext = createContext<ProductProviderData>(
  {} as ProductProviderData
);

export const ProductProvider = ({ children }: ProductProps) => {
  const [product, setProduct] = useState<Product[]>([]);

  const getProducts = () => {
    api
      .get("products")
      .then((response) => {
        console.log(response.data);
        setProduct([...response.data]);
        console.log(product);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleSearch = (userInput: string) => {
    const filteredResults: any = product.filter(
      (product: Product) =>
        product.category.toLowerCase() === userInput.toLowerCase()
    );
    if (filteredResults.length > 0 && !product.includes(filteredResults)) {
      setProduct(filteredResults);
    } else {
      getProducts();
    }
  };
  return (
    <ProductContext.Provider value={{ product, getProducts, handleSearch }}>
      {children}
    </ProductContext.Provider>
  );
};
export const useProduct = () => useContext(ProductContext);
