import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
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
    <Box component="section">
      <Typography>
        ${price} {quantity > 1 && ` ($${price * selectedQuantity})`}
      </Typography>
      <Box my={2} display="flex" justifyContent="space-between">
        <IconButton>
          <RemoveIcon />
        </IconButton>
        <TextField />
        <IconButton aria-label="delete">
          <AddIcon />
        </IconButton>
      </Box>
      <Button fullWidth variant="contained">
        Add to cart
      </Button>
    </Box>
  );
};

export default AddToCart;
