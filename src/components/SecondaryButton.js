import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function SecondaryButton(props) {
  const { icon, body } = props;

  return (
    <button className="flex flex-col rounded-lg items-center justify-evenly leading-tight px-4 py-6 bg-secondary">
      <FontAwesomeIcon className="text-white w-10 h-10 mb-4" icon={icon} />
      <p className="w-28">{body}</p>
    </button>
  );
}
