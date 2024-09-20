import { FieldValues } from "react-hook-form";
import { FieldProps, InputProps } from "../forms/Field";

type Props<Values extends FieldValues> = Omit<FieldProps<Values>, "error"> & Omit<InputProps, "label">;

function SimpleInput<Values extends FieldValues>({ path, register, type, placeholder }: Props<Values>) {
  return (
    <div>
      <input type={type} placeholder={placeholder} {...register(path)}
        className="outline-none border-2 rounded-md px-1 py-2 mb-1 w-full" />
    </div>
  );
};

export default SimpleInput;