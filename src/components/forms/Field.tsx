import { FieldValues, UseFormRegister, Path } from "react-hook-form";
import SimpleWrapper from "../inputs/SimpleWrapper";
import PasswordWrapper from "../inputs/PasswordWrapper";
import Warning from "./Warning";

export interface FieldProps {
  label: string;
  error?: string;
};

export interface InputProps<V extends FieldValues> {
  path: Path<V>;
  register: UseFormRegister<V>;
  type: string;
  placeholder: string;
};

export interface WrapperProps {
  icon?: string;
};

type Props<V extends FieldValues> = FieldProps & InputProps<V> & WrapperProps;

function Field<V extends FieldValues>({ label, error, type, placeholder, path, register, icon }: Props<V>) {
  const renderInput = () => {
    if (type == "text") return <SimpleWrapper {...{path, register, placeholder, type, icon}}></SimpleWrapper>
    if (type == "password") return <PasswordWrapper {...{path, register, placeholder}}></PasswordWrapper>
  };

  return (
    <div className="flex flex-col gap-1 h-[106px]">
      <label className="font-semibold mb-1">{label}</label>
      {renderInput()}
      { error && <Warning error={error} justify="justify-start"></Warning>}
    </div>
  );
};

export default Field;