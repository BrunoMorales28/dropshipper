export interface productItem {
  id: string;
  imgs: string[];
  name: string;
  price: number;
  description: string;
  stock: number;
}

const ProductItem: productItem = {
  id: "123",
  imgs: [
    "https://m.media-amazon.com/images/I/91JB3tAGIlL.jpg",
    "https://m.media-amazon.com/images/I/61G+zTHZq9L.jpg",
    "https://m.media-amazon.com/images/I/61iphtcGO4L._AC_SX679_.jpg",
    "https://m.media-amazon.com/images/I/51i9ikeYR4L._AC_.jpg",
    "https://m.media-amazon.com/images/I/71ZeTw50USL._AC_SX679_.jpg",
    "https://m.media-amazon.com/images/I/615dY5HFZgL._AC_SX679_.jpg",
    "https://m.media-amazon.com/images/I/81HSIbq619L._AC_SX679_.jpg",
  ],
  name: "moon toy",
  price: 420.69,
  description:
    "Some moon toy i used as testing thingy. Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  stock: 28,
};

export default ProductItem;
