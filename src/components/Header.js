import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Header(props) {
  const { title } = props;

  return (
    <div className="flex flex-col justify-center">
      <div className="flex items-center justify-between bg-primary text-white py-2 px-4">
        <div className="w-16 h-12 bg-white"></div>
        <h1 className="font-bold text-xl">{title}</h1>
        <FontAwesomeIcon className="w-8 h-6" icon={faUser} />
      </div>
    </div>
  );
}
