import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ForgotSchema, ForgotInputs } from "./validation";
import useForgot from "@core/hooks/authentication/useForgot";

import Button from "@shared/components/buttons/Button";
import TextField from "@shared/components/fields/variants/TextField";
import Warning from "@shared/components/fields/Warning";

import EmailIcon from "@assets/svgs/email.svg";

function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm<ForgotInputs>({
    resolver: yupResolver(ForgotSchema)
  });

  const { invoke, error } = useForgot();

  const onSubmit = async (inputs: ForgotInputs) => {
    await invoke(inputs);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>

        <div className="mb-4">
          <TextField<ForgotInputs> label="Email" error={errors.email?.message} icon={EmailIcon}
            type="text" placeholder="example@gmail.com" register={register} path="email" />
        </div>

        <div className="mb-4">
          <Button text="Send" type="submit" variant="red"></Button>
        </div>

        <div>
          {error && <Warning message={error.message} justify="center" />}
        </div>

      </form>
    </div>
  );
};

export default Form;