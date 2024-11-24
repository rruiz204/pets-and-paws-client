export interface Variant {
  bgColor: string;
  bgHover: string;
  textColor: string;
};

export interface Variants {
  red: Variant;
};

const variants: Variants = {
  red: { bgColor: "bg-cs-red-100", textColor: "text-cs-white-100", bgHover: "hover:bg-cs-red-200" },
};

export default variants;
