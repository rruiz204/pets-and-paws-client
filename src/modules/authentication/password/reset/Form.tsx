import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ResetSchema, ResetInputs } from "./validation";

import Button from "@shared/components/buttons/Button";
import PasswordField from "@shared/components/fields/variants/PasswordField";

function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm<ResetInputs>({
    resolver: yupResolver(ResetSchema)
  });

  const onSubmit = (data: ResetInputs) => {
    console.log(data);
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

      </form>
    </div>
  );
};

export default Form;