export function FormLabel(props) {
  const { name, children, className } = props;

  return <label htmlFor={name} className={`mb-1 text-menu-gray font-medium ${className}`}>{children}</label>;
}
