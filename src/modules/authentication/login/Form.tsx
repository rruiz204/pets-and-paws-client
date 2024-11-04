import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema, LoginInputs } from "./validation";

import Field from "@shared/components/forms/Field";


function Form() {
  const { register, handleSubmit, formState: {errors} } = useForm<LoginInputs>({ resolver: yupResolver(LoginSchema) });

  const onSubmit = (data: LoginInputs) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Field label="Email" error="email error"></Field>

          <Field label="Password" error="password error"></Field>
        </div>

        <div>
          <button>Login</button>
        </div>
      </form>
    </div>
  );
};

export default Form;