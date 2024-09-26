import LoadingIcon from "../../assets/svgs/loading.svg";

interface Props {
  text: string;
  isLoading: boolean;
};

function ButtonLoading({ text, isLoading }: Props) {
  return (
    <div className="bg-primary rounded-lg hover:bg-tertiary duration-200">
      <button className="w-full flex justify-center gap-1 py-2">
        <p className="text-white font-semibold">{text}</p>
        { isLoading && <img src={LoadingIcon} width={20} height={20} className="animate-spin" /> }
      </button>
    </div>
  );
};

export default ButtonLoading