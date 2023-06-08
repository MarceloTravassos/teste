import { useState } from "react";

export function FormInput(props) {
  const { name, type } = props;

  const [value, setValue] = useState('');

  function handleChange(e) {
    setValue(e.target.value)
    console.log(value)
  }

  return (
    <input
      className="bg-primary px-1 text-black rounded-md h-8 mb-2 bg-opacity-30"
      type={type}
      id={name}
      name={name}
      required
      onChange={handleChange}
      value={value}
    />
  );
}
