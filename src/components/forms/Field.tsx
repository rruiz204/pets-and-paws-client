import { FieldValues, UseFormRegister, Path } from "react-hook-form";
import Capitalize from "../../utils/Capitalize";
import SimpleInput from "../inputs/SimpleInput";
import PasswordInput from "../inputs/PasswordInput";

export interface FieldProps<Values extends FieldValues> {
  path: Path<Values>;
  register: UseFormRegister<Values>;
  error?: string;
};

export interface InputProps {
  type: string;
  label: string;
  placeholder?: string;
};

type Props<Values extends FieldValues> = FieldProps<Values> & InputProps;


function Field<Values extends FieldValues>({ label, error, type, path, register, placeholder }: Props<Values>) {
  const render = () => {
    switch (type) {
      case "text":
        return <SimpleInput {...{path, type, placeholder, register}} ></SimpleInput>
      case "password":
        return <PasswordInput {...{path, placeholder, register}} ></PasswordInput>
    };
  };

  return (
    <div className="flex flex-col h-[100px]">
      <label className="font-semibold mb-1">{Capitalize(label)}</label>
      {render()}
      {error && <p className="text-primary">{Capitalize(error)}</p>}
    </div>
  );
};

export default Field;