import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema, LoginInputs } from "./validation";

import Button from "@shared/components/buttons/Button";
import Field from "@shared/components/fields/Field";
import Text from "@shared/components/fields/Text";
import Password from "@shared/components/fields/Password";

import EmailIcon from "@assets/svgs/email.svg";

function Form() {
  const { register, handleSubmit, formState: {errors} } = useForm<LoginInputs>({
    resolver: yupResolver(LoginSchema)
  });

  const onSubmit = (data: LoginInputs) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>

        <div className="flex flex-col">
          <Field label="Email" error={errors.email?.message}>
            <Text icon={EmailIcon} type="text" placeholder="example@gmail.com"
              register={register} path="email"></Text>
          </Field>

          <Field label="Password" error={errors.password?.message}>
            <Password placeholder="ex4mpl3$" 
              register={register} path="password"></Password>
          </Field>
        </div>

        <div>
          <Button text="Login" type="submit" variant="red"></Button>
        </div>

      </form>
    </div>
  );
};

export default Form;