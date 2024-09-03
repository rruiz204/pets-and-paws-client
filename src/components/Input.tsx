import { UseFormRegister } from "react-hook-form";
import Capitalize from "../utils/capitalize";

interface Props {
  label: string;
  placeholder: string;
  type: string;
  register: ReturnType<UseFormRegister<any>>;
  error?: string;
};

function Input({ label, placeholder, type, register, error } : Props) {
  return (
    <div className="flex flex-col">
      <label htmlFor="" className="font-semibold mb-1">{label}</label>
      <input type={type} placeholder={placeholder} {...register}
        className="outline-none border px-3 py-2 rounded-md"/>
      {error && <p>{Capitalize(error)}</p>}
    </div>
  );
};

export default Input;