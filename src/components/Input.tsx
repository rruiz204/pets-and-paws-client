import { FieldValues } from "react-hook-form";
import { Props as BaseProps } from "./Field";

type Props<Inputs extends FieldValues> = Omit<BaseProps<Inputs>, "error">;

function Input<Inputs extends FieldValues>({ label, register, placeholder, type }: Props<Inputs>) {
  return (
    <div>
      <input type={type} placeholder={placeholder} {...register(label)}
        className="outline-none border-2 rounded-md px-1 py-2 mb-1 w-full" />
    </div>
  )
}

export default Input;