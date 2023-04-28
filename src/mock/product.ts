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
  description: "Some moon toy i used as testing thingy",
  stock: 28,
};

export default ProductItem;