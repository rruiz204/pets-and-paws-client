const Capitalize = (text: string): string => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

export default Capitalize;