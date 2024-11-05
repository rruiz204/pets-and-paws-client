import { BaseProps } from "./Props";
import Warning from "./Warning";

interface ChildrenProps {
  children: React.ReactNode;
};

type Props = BaseProps & ChildrenProps;

function Field({ label, error, children, icon }: Props) {
  return (
    <div className="flex flex-col gap-1 min-h-[108px]">
      <label className="text-cs-blue-300 font-semibold mb-1">{label}</label>

      <div className="flex items-center border">
        <div className="bg-cs-white-300 p-2">
          <img src={icon} height={25} width={25} />
        </div>
        { children }
      </div>

      { error && <Warning message={error} justify="left" /> }
    </div>
  );
};

export default Field;