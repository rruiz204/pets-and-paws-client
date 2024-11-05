export interface Props {
  icon: string;
};

function InputIcon({ icon }: Props) {
  return (
    <div className="bg-cs-white-300 p-2">
      <img src={icon} width={25} height={25} />
    </div>
  );
};

export default InputIcon;