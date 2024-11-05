import Capitalize from "@shared/utilities/Capitalize";
import WarningIcon from "@assets/svgs/warning.svg";

interface IJutifies {
  center: string;
  left: string;
};

const justifies: IJutifies = {
  center: "justify-center",
  left: "justify-start"
};

interface Props {
  message: string;
  justify: keyof(IJutifies);
};

function Warning({ message, justify }: Props) {
  return (
    <div className={`flex items-center gap-1 ${justifies[justify]}`}>
      <img src={WarningIcon} height={20} width={20} />
      <p className="text-cs-red-100 font-semibold">{Capitalize(message)}</p>
    </div>
  );
};

export default Warning;