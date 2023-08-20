import { useRef, useState } from "react";
import { Box, Button, Checkbox, Typography } from "@mui/material";
import DetailsForm from "./DetailsForm";

const Checkout = () => {
  const [isCheckboxTicked, setCheckboxTick] = useState(true);
  const [billingFormData, setBillingFormData] = useState();
  const [shippingFormData, setShippingFormData] = useState();
  const triggerBillingValidation = useRef(() => {});
  const triggerShippingValidation = useRef(() => {});

  const onSubmit = () => {
    triggerBillingValidation.current();
    triggerShippingValidation.current();

    console.log("billingFormData", billingFormData);
    console.log("shippingFormData", shippingFormData);
  };

  return (
    <Box>
      <Typography variant="h1">Your details</Typography>
      <DetailsForm setFormData={setBillingFormData} triggerValidation={triggerBillingValidation} />
      <Checkbox
        checked={isCheckboxTicked}
        onChange={(e) => {
          setCheckboxTick(e.target.checked);
        }}
      />
      <Typography component={"span"}>Same as your shipping address</Typography>
      {!isCheckboxTicked && <DetailsForm setFormData={setShippingFormData} triggerValidation={triggerShippingValidation} />}
      <Button type="submit" sx={{ paddingY: 1.5 }} fullWidth variant="contained" onClick={onSubmit}>
        Continue to checkout
      </Button>
    </Box>
  );
};

export default Checkout;
