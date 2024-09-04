import { useForm } from "react-hook-form";
import { schema, FormInputs } from "./validation";
import Input from "../../components/Input";
import { yupResolver } from "@hookform/resolvers/yup";

function Form() {
  const { register, handleSubmit, formState: { errors }
  } = useForm<FormInputs>({ resolver: yupResolver(schema) });

  const onSubmit = (data: FormInputs) => console.log(data);

  return (
    <div>
      <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
        <Input label="email" placeholder="example@gmail.com" type="text"
          register={register} error={errors.email?.message}></Input>
        <Input label="password" placeholder="password123" type="password"
          register={register} error={errors.password?.message}></Input>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;