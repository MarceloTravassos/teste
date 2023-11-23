export function FormInput(props) {
  const { name, type, value, onChange, placeholder, className, disabled } = props;

  return (
    <input
      placeholder={placeholder}
      className={`bg-primary outline-black px-2 py-5 text-black rounded-md h-8 mb-2 bg-opacity-20 ${className}`}
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      disabled={disabled}
    />
  );
}
