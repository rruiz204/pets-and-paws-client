import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema, LoginInputs } from "./validation";
import useLogin from "@core/hooks/authentication/useLogin";

import SimpleButton from "@shared/components/buttons/SimpleButton";
import TextField from "@shared/components/fields/variants/TextField";
import PasswordField from "@shared/components/fields/variants/PasswordField";
import Warning from "@shared/components/fields/Warning";
import { Link } from "react-router-dom";

import EmailIcon from "@assets/svgs/email.svg";

function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginInputs>({
    resolver: yupResolver(LoginSchema)
  });

  const { invoke, error } = useLogin();

  const onSubmit = async (inputs: LoginInputs) => {
    await invoke(inputs);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>

        <div className="mb-2">
          <TextField<LoginInputs> label="Email" error={errors.email?.message} icon={EmailIcon}
            type="text" placeholder="example@gmail.com" register={register} path="email" />

          <PasswordField<LoginInputs> error={errors.password?.message}
            register={register} path="password" />
        </div>

        <div className="flex justify-end mb-4">
          <Link to="/forgot-password" className="text-cs-gray-300 font-semibold underline">
            Forgot Password
          </Link>
        </div>

        <div className="mb-4">
          <SimpleButton type="submit" variant="red" text="Login"></SimpleButton>
        </div>

        <div>
          { error && <Warning message={error.message} justify="center" /> }
        </div>
        
      </form>
    </div>
  );
};

export default Form;