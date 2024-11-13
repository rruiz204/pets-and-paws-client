import BaseButton, { BaseProps } from "./BaseButton";

interface LocalProps {
  text: string;
};

type Props = BaseProps & LocalProps;

function SimpleButton({ type, handler, variant, text }: Props) {
  return (
    <BaseButton type={type} handler={handler} variant={variant}>
      <p>{text}</p>
    </BaseButton>
  );
};

export default SimpleButton;