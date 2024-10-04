import Capitalize from "../../utils/Capitalize";
import WarningIcon from "../../assets/svgs/warning.svg";

interface Props {
  error: string;
  justify: string;
};

function Warning({ error, justify }: Props) {
  return (
    <div className={`flex gap-1 items-center ${justify}`}>
      <img src={WarningIcon} width={20} height={20} />
      <p className="text-primary">{Capitalize(error)}</p>
    </div>
  );
};

export default Warning;