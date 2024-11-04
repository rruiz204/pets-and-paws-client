interface Props {
  label: string;
  error?: string;
  children?: React.ReactNode;
};

function Field({ label, error, children }: Props) {
  return (
    <div className="flex flex-col gap-1">
      <label className="font-semibold mb-1">{label}</label>
      { children }
      { error && <p>{error}</p> }
    </div>
  );
};

export default Field;