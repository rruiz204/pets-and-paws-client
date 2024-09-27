import { useForm } from "react-hook-form";
import { schema, AuthInputs } from "./validation";
import Field from "../../components/forms/Field";
import LoadingIcon from "../../assets/svgs/loading.svg";
import { yupResolver } from "@hookform/resolvers/yup";
import useAuthStore from "../../stores/useAuthStore";

function Form() {
  const { register, reset, handleSubmit, formState: { errors }
  } = useForm<AuthInputs>({ resolver: yupResolver(schema) });

  const { login, loading } = useAuthStore();

  const onSubmit = (data: AuthInputs) => {
    login(data)
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-3 mb-6">
          <Field label="email" path="email" placeholder="example@gmail.com" type="text"
            register={register} error={errors.email?.message}></Field>
          <Field label="password" path="password" placeholder="password123" type="password"
            register={register} error={errors.password?.message}></Field>
        </div>
        <div className="bg-primary rounded-lg hover:bg-tertiary duration-200">
          <button className="w-full flex justify-center gap-1 py-2">
            <p className="text-white font-semibold">Login</p>
            { loading && <img src={LoadingIcon} width={20} height={20} className="animate-spin" /> }
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;