import { FieldValues } from "react-hook-form";
import { useState } from "react";
import { FieldProps, InputProps } from "../forms/Field";
import SimpleInput from "./SimpleInput";
import EyeIcon from "../../assets/svgs/ege.svg";
import SlashEyeIcon from "../../assets/svgs/slash-eye.svg";

type Props<Values extends FieldValues> = Pick<FieldProps<Values>, "register" | "path"> & Omit<InputProps, "type" | "label">;

function PasswordInput<Values extends FieldValues>({ placeholder, register, path }: Props<Values>) {
  const [hidden, setHidden] = useState<boolean>(true);

  const toggleHidden = () => setHidden(!hidden);

  return (
    <div className="flex items-center">
      <div className="w-[90%]">
        <SimpleInput type={hidden ? "password" : "text"} path={path} placeholder={placeholder} register={register}></SimpleInput>
      </div>
      <button onClick={toggleHidden} type="button" className="border-2">
        {
          hidden
            ? <img src={EyeIcon} width={20} height={20} />
            : <img src={SlashEyeIcon} width={20} height={20} />
        }
      </button>
    </div>
  );
};

export default PasswordInput; 