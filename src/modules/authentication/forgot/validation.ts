import * as yup from "yup";

export const ForgotSchema = yup.object({
  email: yup.string().email().required()
});

export type ForgotInputs = yup.InferType<typeof ForgotSchema>;