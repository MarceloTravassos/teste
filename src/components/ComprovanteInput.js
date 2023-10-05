export function ComprovanteInput(props) {
  const { value, onChange, placeholder } = props;

  return (
    <input
      placeholder={placeholder}
      className="bg-primary outline-black px-2 py-5 text-black rounded-md h-14 mb-2 bg-opacity-20
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-xs file:font-semibold
            file:bg-violet-50 file:text-primary
            hover:file:bg-violet-100"
      type="file"
      id="comprovante"
      name="comprovante"
      required
      value={value}
      onChange={onChange}
    />
  );
}
