import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import productItem from "../../mock/product";
import ImageScroller from "../../Components/ImageScroller";
import AddToCart from "../../Components/AddToCart";

const Product = () => {
  return (
    <Container>
      <Typography variant="h1">{productItem.name}</Typography>
      <ImageScroller imageList={productItem.imgs} />
      <AddToCart price={productItem.price} quantity={productItem.stock} />
    </Container>
  );
};

export default Product;
