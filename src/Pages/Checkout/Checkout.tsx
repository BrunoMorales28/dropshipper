import { useRef, useState } from "react";
import { Box, Button, Checkbox, Typography } from "@mui/material";
import DetailsForm, { detailsSchema } from "./DetailsForm";

const initialAddressValues: detailsSchema = {
  email: "",
  firstName: "",
  lastName: "",
  phone: "",
  address: "",
};

const Checkout = () => {
  const [isCheckboxTicked, setCheckboxTick] = useState(true);

  const billingFormData = useRef(initialAddressValues);
  const triggerBillingValidation = useRef(() => {});
  const isBillingFormValid = useRef(false);

  const shippingFormData = useRef(initialAddressValues);
  const triggerShippingValidation = useRef(() => {});
  const isShippingFormValid = useRef(false);

  const onSubmit = () => {
    triggerBillingValidation.current();
    triggerShippingValidation.current();

    console.log("submitting");
    console.log("billingFormData", billingFormData);
    console.log("shippingFormData", shippingFormData);
  };

  return (
    <Box>
      <Typography variant="h1">Your details</Typography>
      <DetailsForm formData={billingFormData} triggerValidation={triggerBillingValidation} isFormValid={isBillingFormValid} />
      <Checkbox
        checked={isCheckboxTicked}
        onChange={(e) => {
          setCheckboxTick(e.target.checked);
        }}
      />
      <Typography component={"span"}>Same as your shipping address</Typography>
      {!isCheckboxTicked && <DetailsForm formData={shippingFormData} triggerValidation={triggerShippingValidation} isFormValid={isShippingFormValid} />}
      <Button type="submit" sx={{ paddingY: 1.5 }} fullWidth variant="contained" onClick={onSubmit}>
        Continue to checkout
      </Button>
    </Box>
  );
};

export default Checkout;
