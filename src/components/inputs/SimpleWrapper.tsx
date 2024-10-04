import Input from "./Input";
import { InputProps, WrapperProps } from "../forms/Field";
import { FieldValues } from "react-hook-form";

type Props<V extends FieldValues> = InputProps<V> & WrapperProps;

function SimpleWrapper<V extends FieldValues>({ path, register, type, placeholder, icon }: Props<V>) {
  return (
    <div className="flex items-center border-2 rounded-md">
      
      <div className="bg-hover-beige p-2">
        <img src={icon} width={25} height={25} />
      </div>

      <div className="flex-1">
        <Input {...{ path, register, type, placeholder }}></Input>
      </div>

    </div>
  );
};

export default SimpleWrapper;