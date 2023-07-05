export function FormInput(props) {
  const { name, type, value, onChange, className } = props;

  return (
    <input
      className={`bg-primary px-1 text-black rounded-md h-8 mb-2 bg-opacity-30 ${className}`}
      type={type}
      id={name}
      name={name}
      required
      value={value}
      onChange={onChange}
    />
  );
}
