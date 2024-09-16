import Form from "./Form";
import Logo from "../../assets/imgs/pets-and-paws-logo.png"

function Login() {
  return (
    <div className="w-screen h-screen flex justify-center pt-24 text-seconday">
      <div className="p-4 min-w-80 w-[450px]">
        <div className="mb-8">
          <img src={Logo} alt="Paw" className="block mx-auto" width={250} height={250}/>
          <h1 className="text-center text-3xl font-bold">Sign in to your account</h1>
        </div>
        <div className="border-2 p-10 rounded-md">
          <Form></Form>
        </div>
      </div>
    </div>
  );
};

export default Login;