import { useState } from "react";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";

import LockIcon from "@assets/svgs/lock.svg";
import EyeIcon from "@assets/svgs/eye.svg";
import SlashEyeIcon from "@assets/svgs/eye-slash.svg";

interface Props <V extends FieldValues> {
  placeholder: string;
  path: Path<V>;
  register: UseFormRegister<V>;
};

function PasswordInput<V extends FieldValues>({ placeholder, register, path }: Props<V>) {
  const [hidden, setHidden] = useState<boolean>(true);

  return (
    <div className="flex items-center">
      <div>
        <img src={LockIcon} height={25} width={25} />
      </div>

      <div>
        <input type={ hidden ? "password" : "text" } placeholder={placeholder} {...register(path)}
          className="outline-none"/>
      </div>

      <div onClick={() => setHidden(!hidden)} className="">
        <button type="button">
          {
            hidden
            ? <img src={EyeIcon} height={25} width={25} />
            : <img src={SlashEyeIcon} height={25} width={25} />
          }
        </button>
      </div>
    </div>
  );
};

export default PasswordInput;