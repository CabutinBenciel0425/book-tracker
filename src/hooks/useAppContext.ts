import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import type { Book } from "../features/books/bookTypes";

export function useAppContext() {
  const context = useContext(AppContext);

  if (!context)
    throw new Error("useAppContext must be used within AppProvider");

  const { state, dispatch } = context;

  function addBook(newBook: Book) {
    dispatch({
      type: "ADD_BOOK",
      payload: newBook,
    });
  }

  function deleteBook(id: string) {
    dispatch({
      type: "DELETE_BOOK",
      payload: id,
    });
  }

  function updateBook(book: Book) {
    dispatch({
      type: "UPDATE_BOOK",
      payload: book,
    });
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

  return {
    state,
    dispatch,
    addBook,
    deleteBook,
    updateBook,
    toggleFavorite,
    toggleRating,
  };
}
