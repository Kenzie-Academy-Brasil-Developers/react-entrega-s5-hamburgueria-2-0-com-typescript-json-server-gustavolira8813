import { AuthProvider } from "./auth";
import { ProductProvider } from "./product";
import { CartProvider } from "./cart";
const Providers = ({ children }: any) => {
  return (
    <AuthProvider>
      <ProductProvider>
        <CartProvider>{children}</CartProvider>
      </ProductProvider>
    </AuthProvider>
  );
};
export default Providers;
