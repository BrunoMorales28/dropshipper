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

  const setQuantity = (qty: number) => {
    if (qty >= 0) setSelectedQuantity(qty);
  };

  const handleQuantityInput = (e: any) => {
    const value = parseInt(e.target.value);
    if (!Number.isNaN(value)) {
      setQuantity(value);
    } else {
      setQuantity(0);
    }
  };

  return (
    <Box component="section">
      <Box display="flex" justifyContent="space-between">
        <Typography>${price}</Typography>
        <Typography>
          {selectedQuantity >= 1 && `($${price * selectedQuantity})`}
        </Typography>
      </Box>
      <Box my={2} display="flex" justifyContent="space-between">
        <IconButton onClick={() => setQuantity(selectedQuantity - 1)}>
          <RemoveIcon />
        </IconButton>
        <TextField
          error={selectedQuantity > quantity}
          id="standard-number"
          type="number"
          value={selectedQuantity.toString()}
          onChange={handleQuantityInput}
        />
        <IconButton
          aria-label="delete"
          onClick={() => setQuantity(selectedQuantity + 1)}
        >
          <AddIcon />
        </IconButton>
      </Box>
      {selectedQuantity > quantity && (
        <Typography color="error">not enough stock</Typography>
      )}
      <Typography>stock: {quantity}</Typography>
      <Button sx={{ paddingY: 1.5 }} fullWidth variant="contained">
        Buy now
      </Button>
    </Box>
  );
};

export default AddToCart;
