import { FieldValues } from "react-hook-form";
import { HookForm } from "../inputs/Input";
import { useState } from "react";

import Input from "../inputs/Input";
import InputIcon from "../inputs/InputIcon";

import LockIcon from "@assets/svgs/lock.svg";
import EyeIcon from "@assets/svgs/eye.svg";
import EyeSlashIcon from "@assets/svgs/eye-slash.svg";

interface Props<V extends FieldValues> extends HookForm<V> {
  placeholder: string;
};

function Password<V extends FieldValues>({ placeholder, path, register }: Props<V>) {
  const [hidden, setHidden] = useState<boolean>(true);

  return (
    <div className="flex items-center border">
      <InputIcon icon={LockIcon}></InputIcon>
      
      <Input type={hidden ? "password" : "text"} placeholder={placeholder}
        register={register} path={path}></Input>

      <div onClick={() => setHidden(!hidden)} 
        className="flex hover:bg-cs-white-300 duration-200 rounded-md mr-2">
        <button type="button" className="p-1">
          {
            hidden
              ? <img src={EyeIcon} height={25} width={25} />
              : <img src={EyeSlashIcon} height={25} width={25} />
          }
        </button>
      </div>
    </div>
  );
};

export default Password;