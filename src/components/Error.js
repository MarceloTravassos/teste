export function Error(props) {
  const { error, onClick } = props;

  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-opacity-50 flex items-center justify-center z-[9999]">
      <div className="flex flex-col border-[1.5px] border-light-gray leading-tight font-medium w-4/5 bg-white px-5 py-6 rounded-lg shadow-md items-center justify-center">
        <p className="text-menu-gray font-medium leading-tight mb-3 text-justify">
          {error}!
        </p>
        <button
          className="mt-4 px-6 py-3 md:w-64 font-bold bg-primary text-white rounded-md"
          onClick={onClick}
        >
          Fechar
        </button>
      </div>
    </div>
  );
}
