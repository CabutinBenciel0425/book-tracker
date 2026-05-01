import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import type { Book } from "../features/books/bookTypes";

export function useAppContext() {
  const context = useContext(AppContext);

  if (!context)
    throw new Error("useAppContext must be used within AppProvider");

  const { state, dispatch } = context;

  function addBook(newBook: Book) {
    dispatch({ type: "SET_LOADING", payload: true });
    dispatch({
      type: "ADD_BOOK",
      payload: newBook,
    });
    setTimeout(() => dispatch({ type: "SET_LOADING", payload: false }));
  }

  function deleteBook(id: string) {
    dispatch({ type: "SET_LOADING", payload: true });
    dispatch({
      type: "DELETE_BOOK",
      payload: id,
    });
    setTimeout(() => dispatch({ type: "SET_LOADING", payload: false }));
  }

  function updateBook(book: Book) {
    dispatch({ type: "SET_LOADING", payload: true });
    dispatch({
      type: "UPDATE_BOOK",
      payload: book,
    });
    setTimeout(() => dispatch({ type: "SET_LOADING", payload: false }));
  }

  function toggleFavorite(id: string) {
    dispatch({
      type: "TOGGLE_FAVORITE",
      payload: id,
    });
  }

  function toggleRating(id: string, rating: number) {
    dispatch({
      type: "TOGGLE_RATING",
      payload: {
        id,
        rating,
      },
    });
  }

  function openConfirmModal(type: "delete" | "clear", payload?: string) {
    dispatch({
      type: "OPEN_CONFIRM_MODAL",
      payload: {
        type,
        payload,
      },
    });
  }

  function closeConfirmModal() {
    dispatch({
      type: "CLOSE_CONFIRM_MODAL",
    });
  }

  return {
    state,
    dispatch,
    addBook,
    deleteBook,
    updateBook,
    toggleFavorite,
    toggleRating,
    openConfirmModal,
    closeConfirmModal,
  };
}
