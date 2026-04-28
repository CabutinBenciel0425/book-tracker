import { IoSearch } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";

type ButtonType = {
  className?: string;
  onClick: () => void;
  typeName: "search" | "addBook" | "filter";
  children?: string;
};

function Button({ className, onClick, typeName, children }: ButtonType) {
  const type = {
    search: { icon: <IoSearch /> },
    addBook: { icon: <IoMdAdd /> },
    filter: { icon: "" },
  };

  return (
    <button className={className} onClick={onClick}>
      <span>{type[typeName].icon}</span>
      <span>{children}</span>
    </button>
  );
}

export default Button;
