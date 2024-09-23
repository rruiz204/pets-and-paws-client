import { useForm } from "react-hook-form";
import { schema, AuthInputs } from "./validation";
import Field from "../../components/forms/Field";
import Button from "../../components/buttons/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import useAuthStore from "../../stores/useAuthStore";

function Form() {
  const { register, handleSubmit, formState: { errors }
  } = useForm<AuthInputs>({ resolver: yupResolver(schema) });

  const { login } = useAuthStore();

  const onSubmit = (data: AuthInputs) => login(data);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-3 mb-6">
          <Field label="email" path="email" placeholder="example@gmail.com" type="text"
            register={register} error={errors.email?.message}></Field>
          <Field label="password" path="password" placeholder="password123" type="password"
            register={register} error={errors.password?.message}></Field>
        </div>
        <Button text="Login"></Button>
      </form>
    </div>
  );
};

export default Form;