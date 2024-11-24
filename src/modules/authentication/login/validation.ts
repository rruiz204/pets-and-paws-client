import * as yup from "yup";

export const LoginSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(8).required()
});

export type LoginInputs = yup.InferType<typeof LoginSchema>;