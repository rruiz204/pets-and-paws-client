import { FieldValues, UseFormRegister, Path } from "react-hook-form";
import Capitalize from "../utils/Capitalize";

interface Props<T extends FieldValues> {
  label: Path<T>;
  placeholder: string;
  type: string;
  register: UseFormRegister<T>;
  error?: string;
};

function Input<T extends FieldValues>({ label, placeholder, type, register, error } : Props<T>) {
  return (
    <div className="flex flex-col">
      <label className="font-semibold mb-1">{Capitalize(label)}</label>
      <input type={type} placeholder={placeholder} {...register(label)}
        className="outline-none border px-3 py-2 rounded-md" />
      {error && <p>{Capitalize(error)}</p>}
    </div>
  );
};

export default Input;