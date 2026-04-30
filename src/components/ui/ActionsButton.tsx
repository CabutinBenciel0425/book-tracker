import { useAppContext } from "../../hooks/useAppContext";
import Button from "./Button";

function ActionsButton({ id, onEdit }: { id: string; onEdit: () => void }) {
  const { state, openConfirmModal, toggleFavorite } = useAppContext();
  const selectedBook = state.books.find((book) => book.id === id);

  const isFavorite = selectedBook?.isFavorite;

  const actionBtnStyle =
    "bg-transparent text-main-accent cursor-pointer text-xl hover:text-main-accent-hover";

  function handleUpdateBtn() {
    if (!selectedBook) return;

    onEdit();
  }

  function handleDeleteBtn() {
    openConfirmModal("delete", id);
  }

  function handleFavoriteBtn() {
    toggleFavorite(id);
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
        className="bg-transparent text-main-accent cursor-pointer text-xl hover:text-red-400 transition-all ease-in"
        typeName={isFavorite ? "favorite" : "notFavorite"}
        onClick={handleFavoriteBtn}
      />
      <span className="font-semibold text-2xl">|</span>

      <Button
        className="bg-transparent text-main-accent cursor-pointer text-xl hover:text-red-500 transition-all ease-in"
        typeName="deleteBook"
        onClick={handleDeleteBtn}
      />
    </div>
  );
}

export default ActionsButton;
