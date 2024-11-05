import { FieldValues } from "react-hook-form";
import { FormProps } from "../Props";

export interface SimpleInputProps {
  type: string;
  placeholder: string;
};

type Props<V extends FieldValues> = SimpleInputProps & FormProps<V>;

function SimpleInput<V extends FieldValues>({ type, placeholder, register, path }: Props<V>) {
  return (
    <div className="flex-grow">
      <input type={type} placeholder={placeholder} {...register(path)}
        className="outline-none w-full p-2 font-semibold" />
    </div>
  );
};

export default SimpleInput;