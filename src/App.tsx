import Home from "./Pages/Home";
import Header from "./Components/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Product from "./Pages/Product";
import { ThemeProvider } from "@mui/material/styles";
import MaterialTheme from "./MaterialTheme";
import Footer from "./Components/Footer";
import Checkout from "./Pages/Checkout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/product",
    element: <Product />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
]);

function App() {
  return (
    <main>
      <ThemeProvider theme={MaterialTheme}>
        <Header />
        <RouterProvider router={router} />
        <Footer />
      </ThemeProvider>
    </main>
  );
}

export default App;
