import { FaRegTrashCan } from "react-icons/fa6";
import Button from "./Button";
import { useAppContext } from "../../hooks/useAppContext";

function ConfirmModal() {
  const { state, deleteBook, closeConfirmModal } = useAppContext();
  const { confirmModal } = state;

  function handleDelete() {
    if (confirmModal.payload) {
      deleteBook(confirmModal.payload);
      closeConfirmModal();
    }
  }

  return (
    <div className="flex flex-col items-center justify-center gap-8 w-md px-8 py-12">
      <div>
        <FaRegTrashCan className="text-8xl" />
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <h2 className="text-xl font-semibold text-wrap text-center">
          Are you sure you want to delete this book?
        </h2>
        <p className="text-md">This action cannot be undone.</p>
      </div>

      <div className="flex flex-row items-center justify-center gap-3 mt-5 w-full">
        <Button
          className="border-2 border-main-accent bg-transparent text-main-accent text-lg rounded-md cursor-pointer px-2 py-1 hover:bg-blue-200 transition-all duration-200 ease-in w-1/2"
          onClick={closeConfirmModal}
          typeName="cancelModal"
        >
          Cancel
        </Button>
        <Button
          className="border-2 border-main-accent bg-main-accent text-neutral-100 text-lg rounded-md cursor-pointer hover:bg-main-accent-hover transition-all duration-200 ease-in py-1 px-2 w-1/2"
          typeName="addBookModal"
          onClick={handleDelete}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}

export default ConfirmModal;
