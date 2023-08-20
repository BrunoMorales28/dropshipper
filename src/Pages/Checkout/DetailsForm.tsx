import { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Typography, TextField } from "@mui/material";
import * as Yup from "yup";

const detailsYupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  firstName: Yup.string().required("What is your name?"),
  lastName: Yup.string().required("What is your surname?"),
  phone: Yup.string().required("What is your phone number?"),
  address: Yup.string().required("What is your address?"),
});

const details = ["email", "firstName", "lastName", "phone", "address"];

const detailLabels = {
  email: "email address",
  firstName: "first name",
  lastName: "last name",
  phone: "phone number",
  address: "address",
};

type detailSchema = "email" | "firstName" | "lastName" | "phone" | "address";

export type detailsSchema = {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
};

const DetailsForm = ({ formData, triggerValidation, isFormValid }: { formData: React.MutableRefObject<detailsSchema>; triggerValidation: React.MutableRefObject<() => void>; isFormValid: React.MutableRefObject<boolean> }) => {
  const {
    register,
    trigger,
    getValues,
    formState: { errors, isValid },
  } = useForm<detailsSchema>({ defaultValues: formData.current, resolver: yupResolver(detailsYupSchema) });

  const saveValues = useCallback(
    (name: detailSchema) => {
      trigger(name);
      formData.current = getValues();
    },
    [formData, getValues, trigger]
  );

  const DetailField = ({ name }: { name: detailSchema }) => (
    <Box my={2}>
      <TextField onBlur={() => saveValues(name)} label={detailLabels[name]} inputProps={{ ...register(name) }} />
      {errors[name]?.message && <Typography color={"error"}>{errors[name]?.message}</Typography>}
    </Box>
  );

  useEffect(() => {
    isFormValid.current = isValid;
  }, [isFormValid, isValid]);
  useEffect(() => {
    triggerValidation.current = trigger;
  }, [triggerValidation, trigger]);

  return (
    <form>
      {details.map((detailName) => (
        <DetailField key={detailName} name={detailName as detailSchema} />
      ))}
    </form>
  );
};

export default DetailsForm;
