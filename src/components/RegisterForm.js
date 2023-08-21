export function RegisterForm(props) {
  const { children, enctype, onSubmit } = props;

  return (
    <div className="w-72 h-96 mb-2 px-5 py-3 rounded-xl bg-white mt-4">
      <form onSubmit={onSubmit} encType={enctype} className="flex flex-col">{children}</form>
    </div>
  );
}
