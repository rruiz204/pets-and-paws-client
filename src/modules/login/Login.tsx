import Form from "./Form";
import PawSvg from "../../assets/svgs/paw.svg";

function Login() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="p-2 min-w-80 w-[450px]">
        <div className="">
          <img src={PawSvg} alt="Paw" className="block mx-auto" width={100} height={100}/>
          <h1 className="text-center text-3xl font-bold">Sign in to your account</h1>
        </div>
        <br />
        <div className="border-2 p-10 rounded-md">
          <Form></Form>
        </div>
      </div>
    </div>
  );
};

export default Login;