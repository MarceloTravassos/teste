export function FormLabel(props) {
  const { name, children } = props;

  return <label htmlFor={name} className="mb-1">{children}</label>;
}
