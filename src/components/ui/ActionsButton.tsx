import { useAppContext } from "../../hooks/useAppContext";
import Button from "./Button";

function ActionsButton({ id, onEdit }: { id: string; onEdit: () => void }) {
  const { state } = useAppContext();

  const actionBtnStyle =
    "bg-transparent text-main-accent cursor-pointer text-xl hover:text-main-accent-hover";

  function handleUpdateBtn() {
    const selectedBook = state.books.find((book) => book.id === id);
    if (!selectedBook) return;

    onEdit();
  }
  return (
    <div className="flex items-center justify-start gap-3">
      <Button
        className={actionBtnStyle}
        typeName="viewBook"
        onClick={() => console.log("view book")}
      />

      <Button
        className={actionBtnStyle}
        typeName="updateBook"
        onClick={handleUpdateBtn}
      />

      <Button
        className={actionBtnStyle}
        typeName="deleteBook"
        onClick={() => console.log("delete book")}
      />
    </div>
  );
}

export default ActionsButton;
