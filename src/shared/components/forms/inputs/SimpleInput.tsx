import { FieldValues, Path, UseFormRegister } from "react-hook-form";

interface Props <V extends FieldValues> {
  type: string;
  placeholder: string;
  icon: string;
  path: Path<V>;
  register: UseFormRegister<V>;
};

function SimpleInput<V extends FieldValues>({ type, placeholder, icon, register, path }: Props<V>) {
  return (
    <div className="flex items-center">
      <div>
        <img src={icon} height={25} width={25} />
      </div>

      <div>
        <input type={type} placeholder={placeholder} {...register(path)} 
          className="outline-none"/>
      </div>
    </div>
  );
};

export default SimpleInput;