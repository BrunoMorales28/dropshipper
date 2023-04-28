import Home from "./Pages/Home";
import Header from "./Components/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Product from "./Pages/Product";
import { ThemeProvider } from "@mui/material/styles";
import MaterialTheme from "./MaterialTheme";
import Footer from "./Components/Footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/product",
    element: <Product />,
  },
]);

function App() {
  return (
    <main className="App">
      <ThemeProvider theme={MaterialTheme}>
        <Header />
        <RouterProvider router={router} />
        <Footer />
      </ThemeProvider>
    </main>
  );
}

export default App;
