import { FieldValues, UseFormRegister, Path } from "react-hook-form";
import Capitalize from "../utils/Capitalize";

interface Props<Inputs extends FieldValues> {
  label: Path<Inputs>;
  register: UseFormRegister<Inputs>
  placeholder: string;
  type: string;
  error?: string;
}

function Input<Inputs extends FieldValues>
  ({ label, type, placeholder, error, register }: Props<Inputs>) {
  return (
    <div className="flex flex-col">
      <label className="font-semibold mb-1">{Capitalize(label)}</label>
      <input type={type} placeholder={placeholder} {...register(label)} />
      { error && <p>{Capitalize(error)}</p> }
    </div>
  );
};

export default Input;