export function RegisterForm(props) {
  const { children, enctype } = props;

  return (
    <div className="w-64 mb-2 px-5 py-3 rounded-xl bg-white mt-4">
      <form encType={enctype} className="flex flex-col">{children}</form>
    </div>
  );
}
