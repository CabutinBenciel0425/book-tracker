import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../hooks/useAppContext";
import Button from "./Button";

type ActionsButtonPropsType = {
  id: string;
  onEdit?: () => void;
  showView?: boolean;
};

function ActionsButton({
  id,
  onEdit,
  showView = true,
}: ActionsButtonPropsType) {
  const { state, openConfirmModal, toggleFavorite } = useAppContext();
  const navigate = useNavigate();
  const selectedBook = state.books.find((book) => book.id === id);

  const isFavorite = selectedBook?.isFavorite;

  const actionBtnStyle = `bg-transparent text-main-accent cursor-pointer text-xl hover:text-main-accent-hover`;

  function handleUpdateBtn() {
    if (!selectedBook) return;

    onEdit?.();
  }

  function handleDeleteBtn() {
    openConfirmModal("delete", id);
  }

  function handleFavoriteBtn() {
    toggleFavorite(id);
  }

  function handleViewBookBtn() {
    navigate(`/books/${id}`);
  }
  return (
    <div className="flex items-center justify-start gap-3">
      {showView && (
        <Button
          className={actionBtnStyle}
          typeName="viewBook"
          onClick={handleViewBookBtn}
        />
      )}

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
