import { useState } from "react";
import Input from "./Input";
import { InputProps } from "../forms/Field";
import { FieldValues } from "react-hook-form";

import LockIcon from "../../assets/svgs/lock.svg";
import EyeIcon from "../../assets/svgs/ege.svg";
import SlashEyeIcon from "../../assets/svgs/slash-eye.svg";

type Props<V extends FieldValues> = Omit<InputProps<V>, "type">;

function PasswordWrapper<V extends FieldValues>({ path, register, placeholder }: Props<V>) {
  const [hidden, setHidden] = useState<boolean>(true);
  const toggleHidden = () => setHidden(!hidden);

  return (
    <div className="flex items-center border-2 rounded-md">

      <div className="bg-hover-beige p-2">
        <img src={LockIcon} width={25} height={25} />
      </div>

      <div className="flex-grow">
        <Input {...{ path, register, placeholder, type: hidden ? "password" : "text" }}></Input>
      </div>

      <div onClick={toggleHidden} className="flex hover:bg-hover-beige duration-200 rounded-md mr-2">
        <button type="button" className="p-1">
          {
            hidden
              ? <img src={EyeIcon} width={25} height={25} />
              : <img src={SlashEyeIcon} width={25} height={25} />
          }
        </button>
      </div>
      
    </div>
  );
};

export default PasswordWrapper;