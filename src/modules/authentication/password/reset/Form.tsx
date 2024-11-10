import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ResetSchema, ResetInputs } from "./validation";
import useResetPassword from "./hooks/useResetPassword";
import { useParams } from "react-router-dom";

import Button from "@shared/components/buttons/Button";
import PasswordField from "@shared/components/fields/variants/PasswordField";
import Warning from "@shared/components/fields/Warning";

function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm<ResetInputs>({
    resolver: yupResolver(ResetSchema)
  });

  const { invoke, error } = useResetPassword();
  const { token } = useParams();

  const onSubmit = async (inputs: ResetInputs) => {
    if (token) await invoke({ token, newPassword: inputs.password })
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>

        <div className="mb-4">
          <PasswordField<ResetInputs> error={errors.password?.message}
            register={register} path="password" />

          <PasswordField<ResetInputs> error={errors.confirmPassword?.message}
            register={register} path="confirmPassword" />
        </div>

        <div className="mb-4">
          <Button text="Reset" type="submit" variant="red"></Button>
        </div>

        <div>
          {error && <Warning message={error.message} justify="center" />}
        </div>

      </form>
    </div>
  );
};

export default Form;