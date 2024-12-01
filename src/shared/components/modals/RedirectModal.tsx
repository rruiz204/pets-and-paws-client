import { useNavigate } from "react-router-dom";
import BaseModal from "./BaseModel";
import SimpleButton from "../buttons/SimpleButton";

const RedirectModal = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <BaseModal title="Invalid Authentication Token" message="An invalid authentication token has been detected, please log in again.">
      <div className="flex justify-end">
        <div className="w-[100px]">
          <SimpleButton text="Login" variant="red" type="button" handler={() => navigate("/login")}></SimpleButton>
        </div>
      </div>
    </BaseModal>
  );
};

export default RedirectModal;