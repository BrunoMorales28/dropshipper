import Home from "./Pages/Home";
import Header from "./Components/Header";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Product from "./Pages/Product";
import { ThemeProvider } from "@mui/material/styles";
import MaterialTheme from "./MaterialTheme";

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
    <div className="App">
      <ThemeProvider theme={MaterialTheme}>
        <Header />
        <header
          className="Ap
      p-header"
        >
          <RouterProvider router={router} />
        </header>
      </ThemeProvider>
    </div>
  );
}

export default App;
