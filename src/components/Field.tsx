import { FieldValues, UseFormRegister, Path } from "react-hook-form";
import Input from "./Input";
import Password from "./Password";
import Capitalize from "../utils/Capitalize";

export interface Props<Inputs extends FieldValues> {
  label: Path<Inputs>;
  register: UseFormRegister<Inputs>
  placeholder: string;
  type: string;
  error?: string;
}

function Field<Inputs extends FieldValues>({ 
  label, type, placeholder, error, register
}: Props<Inputs>) {
  return (
    <div className="flex flex-col h-[100px]">
      <label className="font-semibold mb-1">{Capitalize(label)}</label>
      {
        type != "password"
        ? <Input label={label} placeholder={placeholder} type={type} register={register}></Input>
        : <Password label={label} placeholder={placeholder} register={register}></Password>
      }
      { error && <p className="text-primary">{Capitalize(error)}</p> }
    </div>
  );
};

export default Field;