import { FieldValues } from "react-hook-form";
import { Props as InputProps } from "../inputs/Input";
import { Props as InputIconProps } from "../inputs/InputIcon";

import Input from "../inputs/Input";
import InputIcon from "../inputs/InputIcon";

type Props<V extends FieldValues> =  InputProps<V> & InputIconProps;

function Text<V extends FieldValues>({ icon, type, placeholder, path, register }: Props<V>) {
  return (
    <div className="flex items-center border">
      <InputIcon icon={icon}></InputIcon>
      <Input type={type} placeholder={placeholder} register={register} path={path}></Input>
    </div>
  );
};

export default Text;