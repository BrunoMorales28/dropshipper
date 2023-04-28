import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";

interface addToCartProps {
  price: number;
  quantity: number;
}

const AddToCart = ({ price, quantity }: addToCartProps) => {
  const [selectedQuantity, setSelectedQuantity] = useState(0);

  const setQuantity = (quantity: number) => {
    setSelectedQuantity(quantity);
  };

  return (
    <section>
      <Typography>${price}</Typography>
      <Button>Add to cart</Button>
    </section>
  );
};

export default AddToCart;
