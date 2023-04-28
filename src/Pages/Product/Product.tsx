import { Container, Divider } from "@mui/material";
import Typography from "@mui/material/Typography";
import productItem from "../../mock/product";
import ImageScroller from "../../Components/ImageScroller";
import AddToCart from "../../Components/AddToCart";

const Product = () => {
  return (
    <Container>
      <Typography my={3} variant="h1">
        {productItem.name}
      </Typography>
      <ImageScroller imageList={productItem.imgs} />
      <Divider sx={{ marginY: 3 }} />
      <AddToCart price={productItem.price} quantity={productItem.stock} />
      <Divider sx={{ marginY: 3 }} />
      <Typography my={3} variant="h2">
        Product description
      </Typography>
      <Typography my={3} px={3}>
        {productItem.description}
      </Typography>
    </Container>
  );
};

export default Product;
