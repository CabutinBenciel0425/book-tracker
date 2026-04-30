import { IoSearch } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import { LuPencil } from "react-icons/lu";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa";

type ButtonType = {
  className?: string;
  onClick?: () => void;
  typeName:
    | "search"
    | "addBook"
    | "filter"
    | "viewBook"
    | "updateBook"
    | "deleteBook"
    | "addBookModal"
    | "cancelModal";
  children?: string;
};

function Button({ className, onClick, typeName, children }: ButtonType) {
  const type = {
    search: { icon: <IoSearch /> },
    addBook: { icon: <IoMdAdd /> },
    filter: { icon: "" },
    viewBook: { icon: <FaRegEye /> },
    updateBook: { icon: <LuPencil /> },
    deleteBook: { icon: <FaRegTrashCan /> },
    addBookModal: { icon: "" },
    cancelModal: { icon: "" },
  };

  return (
    <button className={className} onClick={onClick}>
      <span>{type[typeName].icon}</span>
      <span>{children}</span>
    </button>
  );
}

export default Button;
