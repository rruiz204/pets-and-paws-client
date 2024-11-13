import { FieldValues } from "react-hook-form";
import { useState } from "react";

import Field from "../Field";
import SimpleInput from "../inputs/SimpleInput";
import { BaseProps, FormProps } from "../Props";

import LockIcon from "@assets/svgs/lock.svg";
import EyeOpenIcon from "@assets/svgs/eye-open.svg";
import EyeCloseIcon from "@assets/svgs/eye-close.svg";

type Props<V extends FieldValues> = FormProps<V> & Pick<BaseProps, "error">;

function PasswordField<V extends FieldValues>({ register, path, error }: Props<V>) {
  const [hidden, setHidden] = useState<boolean>(true);

  return (
    <Field label="Password" icon={LockIcon} error={error}>
      <SimpleInput<V> type={hidden ? "password" : "text"} placeholder="ex4mpl3$"
        register={register} path={path} />

      <div onClick={() => setHidden(!hidden)}
        className="flex hover:bg-cs-white-300 duration-200 rounded-md mr-2">
        <button type="button" className="p-1">
          {
            hidden
              ? <img src={EyeOpenIcon} height={25} width={25} />
              : <img src={EyeCloseIcon} height={25} width={25} />
          }
        </button>
      </div>
    </Field>
  );
};

export default PasswordField;