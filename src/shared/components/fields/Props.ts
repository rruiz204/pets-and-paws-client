import { FieldValues, Path, UseFormRegister } from "react-hook-form";

export interface FormProps<V extends FieldValues> {
  path: Path<V>;
  register: UseFormRegister<V>;
};

export interface BaseProps {
  label: string;
  icon: string;
  error?: string;
};