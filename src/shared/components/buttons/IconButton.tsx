import BaseButton, { BaseProps } from "./BaseButton";

interface LocalProps {
  text: string;
  icon: string;
  iconClass?: string;
  iconPosition: "left" | "right";
};

type Props = BaseProps & LocalProps;

function IconButton({ type, handler, variant, text, icon, iconPosition, iconClass }: Props) {
  return (
    <BaseButton type={type} handler={handler} variant={variant}>
      <div className="">
        { iconPosition == "left" && <img src={icon} className={iconClass} /> }
        <p>{text}</p>
        { iconPosition == "right" && <img src={icon} className={iconClass} /> }
      </div>
    </BaseButton>
  );
};

export default IconButton;