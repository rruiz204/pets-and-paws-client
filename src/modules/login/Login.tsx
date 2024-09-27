import Form from "./Form";
import Logo from "../../assets/imgs/pets-and-paws-logo.png"
import useAuthStore from "../../stores/useAuthStore";
import ErrorIcon from "../../assets/svgs/error.svg";

function Login() {
  const { error } = useAuthStore();

  return (
    <div className="w-screen h-screen pt-24 text-seconday">
      <div className="px-6 py-4 min-w-[360px] max-w-[450px] mx-auto">
        <div className="flex flex-col gap-10">
          <div>
            <img src={Logo} className="block mx-auto" width={250} height={250} />
            <h1 className="text-center text-3xl font-bold">Signin to your account</h1>
          </div>
          <div>
            <Form></Form>
          </div>
          {
            error &&
            <div className="mt-2 flex justify-center gap-1">
              <img src={ErrorIcon} width={20} height={20} />
              <p className="text-primary text-center font-semibold">{error}</p>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Login;