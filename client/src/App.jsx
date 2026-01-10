// Css
import "./App.css";

// Toaster
import { Toaster } from "react-hot-toast";

// Routers
import { AppRouter } from "./routes/AppRouter";

// Providers
import { ProductsProvider } from "./providers/ProductsProvider";

export const App = () => {
  return (
    <ProductsProvider>
      <AppRouter />
      <Toaster position="top-center" reverseOrder={false} />
    </ProductsProvider>
  );
};
