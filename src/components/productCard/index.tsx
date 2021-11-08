import { ListItems } from "./styles";
interface Product {
  img: string;
  id: number;
  name: string;
  category: string;
  price: number;
}
interface ProductCardProps {
  callback: (product: Product) => void;
  product: any;
  type: string;
}

const ProductCard = ({ product, callback, type }: ProductCardProps) => {
  return (
    <ListItems>
      <div className="product product-image">
        <img src={product.img} alt="burgeria" />
      </div>
      <div className="product product-details">
        <h1>{product.name}</h1>
        <p>{product.category}</p>
        <h3>R$ {product.price}</h3>
      </div>

      <button className="product product-btn" onClick={() => callback(product)}>
        {type === "home" ? "Adicionar" : "Remover"}
      </button>
    </ListItems>
  );
};
export default ProductCard;
