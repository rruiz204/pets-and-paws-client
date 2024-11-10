import * as yup from "yup";

export const ResetSchema = yup.object({
  password: yup.string().min(8).required(),
  confirmPassword: yup.string().required().oneOf([yup.ref("password")], "Passwords must match")
});

export type ResetInputs = yup.InferType<typeof ResetSchema>;