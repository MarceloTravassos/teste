export function SubmitButton(props) {
  const { type, children, className } = props;

  return (
    <button
      type={type}
      className={`mt-2 bg-primary px-16 py-2 rounded-lg font-bold text-white text-xl ${className}`}
    >
      {children}
    </button>
  );
}
