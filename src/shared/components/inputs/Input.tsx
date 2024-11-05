import { FieldValues, Path, UseFormRegister } from "react-hook-form";

export interface HookForm<V extends FieldValues> {
  path: Path<V>;
  register: UseFormRegister<V>;
};

export interface Props<V extends FieldValues> extends HookForm<V> {
  type: string;
  placeholder: string;
};

function Input<V extends FieldValues>({ type, placeholder, path, register }: Props<V>) {
  return (
    <div className="flex-grow">
      <input type={type} placeholder={placeholder} {...register(path)}
        className="outline-none w-full p-2 font-semibold" />
    </div>
  );
};

export default Input;