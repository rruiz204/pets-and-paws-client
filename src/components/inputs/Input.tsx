import { FieldValues } from "react-hook-form";
import { InputProps } from "../forms/Field";

function Input<V extends FieldValues>({ path, register, type, placeholder }: InputProps<V>) {
  return (
    <div>
      <input type={type} placeholder={placeholder} {...register(path)}
        className="outline-none w-full p-2 font-semibold rounded-md"/>
    </div>
  );
};

export default Input;