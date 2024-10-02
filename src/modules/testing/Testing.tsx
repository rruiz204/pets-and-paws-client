function Testing() {
  return (
    <div className="flex">
      <p>message: {import.meta.env.VITE_MESSAGE}</p>
    </div>
  );
};

export default Testing;