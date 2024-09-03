import { useForm } from "react-hook-form";
import schema from "./validation";
import Input from "../../components/Input";
import { yupResolver } from "@hookform/resolvers/yup";

function Form() {
  const {register, handleSubmit, formState: { errors }} = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data: any) => console.log(data);

  return (
    <div>
      <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
        <Input label="Email" placeholder="example@gmail.com" type="text"
          register={register("email")} error={errors.email?.message}></Input>
        <Input label="Password" placeholder="password123" type="password"
          register={register("password")} error={errors.password?.message}></Input>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;