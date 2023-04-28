import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import productItem from "../../mock/product.json";
import ImageScroller from "../../Components/ImageScroller";

const Product = () => {
  return (
    <Container>
      <Typography variant="h1">{productItem.name}</Typography>
      <ImageScroller imageList={productItem.imgs} />
    </Container>
  );
};

export default Product;
