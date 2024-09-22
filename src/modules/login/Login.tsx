import Form from "./Form";
import Logo from "../../assets/imgs/pets-and-paws-logo.png"

function Login() {
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
        </div>
      </div>
    </div>
  );
};

export default Login;