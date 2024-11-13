import variants, { Variants, Variant } from "./variants";
type ButtonType = "submit" | "button";

export interface BaseProps {
  type: ButtonType;
  handler?: () => void;
  variant: keyof Variants;
};

interface ChildrenProps {
  children: React.ReactNode;
};

type Props = BaseProps & ChildrenProps;

function BaseButton({ type, children, handler, variant }: Props) {
  const styles: Variant = variants[variant];

  return (
    <div className={`rounded-lg duration-200 ${styles.bgColor} ${styles.bgHover}`} onClick={handler}>
      <button type={type} className={`font-semibold w-full p-2 ${styles.textColor}`}>
        { children }
      </button>
    </div>
  );
};

export default BaseButton;