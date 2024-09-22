import { FieldValues } from "react-hook-form";
import { useState } from "react";
import { FieldProps, InputProps } from "../forms/Field";
import EyeIcon from "../../assets/svgs/ege.svg";
import SlashEyeIcon from "../../assets/svgs/slash-eye.svg";

type Props<Values extends FieldValues> = Pick<FieldProps<Values>, "register" | "path"> & Omit<InputProps, "type" | "label">;

function PasswordInput<Values extends FieldValues>({ placeholder, register, path }: Props<Values>) {
  const [hidden, setHidden] = useState<boolean>(true);

  const toggleHidden = () => setHidden(!hidden);

  return (
    <div className="border-2 flex items-center rounded-md p-1">
      <div className="w-[90%]">
        <input type={hidden ? "password" : "text"} placeholder={placeholder} {...register(path)} 
          className="outline-none p-1 w-full"/>
      </div>
      <div className="flex justify-center w-[10%]">
        <button onClick={toggleHidden} type="button" className="p-1 rounded-lg hover:bg-[#ebebeb] duration-200">
          {
            hidden
              ? <img src={EyeIcon} width={20} height={20} />
              : <img src={SlashEyeIcon} width={20} height={20} />
          }
        </button>
      </div>
    </div>
  );
};

export default PasswordInput; 