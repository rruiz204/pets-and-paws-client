import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema, AuthInputs } from "./validation";
import useAuthStore from "../../stores/useAuthStore";
import { useNavigate } from "react-router-dom";
import Field from "../../components/forms/Field";
import Warning from "../../components/forms/Warning";

import LoadingIcon from "../../assets/svgs/loading.svg";
import EmailIcon from "../../assets/svgs/email.svg";

function Form() {
  const { register, handleSubmit, formState: { errors }
  } = useForm<AuthInputs>({ resolver: yupResolver(schema) });
  const navigate = useNavigate();

  const { login, loading, error } = useAuthStore();
  const onSubmit = async (data: AuthInputs) => {
    await login(data);
    if (!error) navigate("/home");
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>

        <div className="flex flex-col gap-2 mb-6">
          <Field label="Email" path="email" placeholder="example@gmail.com" type="text"
            register={register} error={errors.email?.message} icon={EmailIcon}></Field>
          <Field label="Password" path="password" placeholder="ex4mpl3$" type="password"
            register={register} error={errors.password?.message}></Field>
        </div>

        <div className="bg-primary hover:bg-tertiary duration-200 rounded-md">
          <button className="w-full p-2 flex justify-center gap-1">
            <p className="text-white font-semibold">Login</p>
            { loading && <img src={LoadingIcon} width={23} height={23} className="animate-spin" /> }
          </button>
        </div>

        <div className="mt-8">
          { error && <Warning error={error} justify="justify-center"></Warning> }
        </div>

      </form>
    </div>
  );
};

export default Form;