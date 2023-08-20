import { useEffect } from "react";
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

type detailsSchema = {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
};

const DetailsForm = ({ setFormData, triggerValidation }: { setFormData: Function; triggerValidation: React.MutableRefObject<() => void> }) => {
  const {
    register,
    trigger,
    getValues,
    formState: { errors, isValid },
  } = useForm<detailsSchema>({ resolver: yupResolver(detailsYupSchema) });

  const DetailField = ({ name }: { name: detailSchema }) => (
    <Box my={2}>
      <TextField label={detailLabels[name]} inputProps={{ ...register(name) }} />
      {errors[name]?.message && <Typography color={"error"}>{errors[name]?.message}</Typography>}
    </Box>
  );

  useEffect(() => {
    setFormData({ data: getValues(), isValid });
  }, [setFormData, getValues, isValid]);
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
