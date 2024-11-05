interface Variant {
  bg: string;
  hover: string;
  text: string;
};

interface Variants {
  red: Variant;
};

interface Props {
  text: string;
  type: "submit" | "button";
  variant: keyof Variants;
};

function Button({ text, type, variant }: Props) {

  const variants: Variants = {
    red: { bg: "bg-cs-red-100", text: "text-cs-white-100", hover: "hover:bg-cs-red-200" },
  };

  return (
    <div className={`${variants[variant].bg} ${variants[variant].hover} rounded-lg duration-200`}>
      <button className={`${variants[variant].text} font-semibold w-full p-2`} type={type}>
        {text}
      </button>
    </div>
  );
};

export default Button;