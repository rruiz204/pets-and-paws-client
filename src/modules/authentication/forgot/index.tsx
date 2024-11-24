import Form from "./Form";

import Logo from "@assets/imgs/pets-and-paws-logo.png";

function Forgot() {
  return (
    <div className="w-screen h-screen min-[1600px]:py-20 py-12 text-cs-blue-300">
      <div className="min-w-[360px] max-w-[450px] mx-auto px-6 py-4">
        <div className="flex flex-col gap-4">

          <div>
            <img src={Logo} className="block mx-auto" width={200} height={200} />
            <h1 className="text-center text-3xl font-bold mb-2">Forgot password?</h1>

            <p className="text-center text-cs-gray-300">
              Enter your email address to receive a link to reset your Pets & Paws account password.
            </p>
          </div>

          <div>
            <Form></Form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Forgot;