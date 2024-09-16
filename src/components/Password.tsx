import { FieldValues } from "react-hook-form";
import Input from "./Input";
import { useState } from "react";
import { Props as BaseProps } from "./Field";

import EyeSvg from "../assets/svgs/ege.svg";
import SlashEyeSvg from "../assets/svgs/slash-eye.svg";

type Props<Inputs extends FieldValues> = Omit<BaseProps<Inputs>, "error" | "type">;

function Password<Inputs extends FieldValues>({ label, register, placeholder }: Props<Inputs>) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative">
      <Input label={label} placeholder={placeholder} type="password" register={register}></Input>
      <button className="absolute top-2 right-2" onClick={togglePasswordVisibility} type="button">
        {
          showPassword
          ? <img src={EyeSvg} width={20} height={20} />
          : <img src={SlashEyeSvg} width={20} height={20} />
        }
      </button>
    </div>
  )
}

export default Password;