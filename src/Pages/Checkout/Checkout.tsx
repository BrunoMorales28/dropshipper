import { Box, Button, Typography, TextField, Container } from "@mui/material";
import { Formik, Form, Field, FormikProps } from "formik";
import * as Yup from "yup";

const emailSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
});

const FormikTextField = ({
  field, // { name, value, onChange, onBlur }
  ...props
}: {
  field: any;
}) => <TextField inputProps={{ ...field, ...props }} />;

const Checkout = () => {
  return (
    <Container>
      <Typography variant="h1">Hi there!</Typography>
      <Typography>
        Please enter your email address to start your checkout
      </Typography>
      <Formik
        initialValues={{
          email: "",
        }}
        validationSchema={emailSchema}
        onSubmit={(values) => {
          // same shape as initial values
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field name="email" type="email" component={FormikTextField} />
            {errors.email && touched.email && (
              <Typography color={"error"}>{errors.email}</Typography>
            )}
            <Button
              type="submit"
              sx={{ paddingY: 1.5 }}
              fullWidth
              variant="contained"
            >
              Continue to checkout
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default Checkout;
