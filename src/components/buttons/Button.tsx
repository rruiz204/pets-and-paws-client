export interface Props {
  text: string;
};

function Button({ text }: Props) {
  return (
    <div className="bg-primary rounded-lg hover:bg-tertiary duration-200">
      <button className="text-white font-semibold w-full p-2">{text}</button>
    </div>
  );
};

export default Button;