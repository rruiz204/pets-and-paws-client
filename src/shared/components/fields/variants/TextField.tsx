import { FieldValues } from "react-hook-form";
import Field from "../Field";
import SimpleInput, { SimpleInputProps } from "../inputs/SimpleInput";
import { BaseProps, FormProps } from "../Props";

type Props<V extends FieldValues> = SimpleInputProps & BaseProps & FormProps<V>;

function TextField<V extends FieldValues>({ 
  label, error, icon, type,
  placeholder, path, register
}: Props<V>) {
  return (
    <Field label={label} error={error} icon={icon}>
      <SimpleInput<V> type={type} placeholder={placeholder} register={register} path={path} />
    </Field>
  );
};

export default TextField;