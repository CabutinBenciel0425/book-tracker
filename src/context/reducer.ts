import type { Action, AppState } from "./types";

export function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case "ADD_BOOK":
      return {
        ...state,
        books: [action.payload, ...state.books],
      };

    case "DELETE_BOOK":
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload),
      };

    case "UPDATE_BOOK":
      return {
        ...state,
        books: state.books.map((book) =>
          book.id === action.payload.id ? action.payload : book,
        ),
      };

    case "TOGGLE_FAVORITE":
      return {
        ...state,
        books: state.books.map((book) =>
          book.id === action.payload
            ? { ...book, isFavorite: !book.isFavorite }
            : book,
        ),
      };

    case "TOGGLE_RATING":
      return {
        ...state,
        books: state.books.map((book) =>
          book.id === action.payload.id
            ? { ...book, rating: action.payload.rating }
            : book,
        ),
      };

    case "OPEN_CONFIRM_MODAL":
      return {
        ...state,
        confirmModal: {
          isOpen: true,
          type: action.payload.type,
          payload: action.payload.payload,
        },
      };

    case "CLOSE_CONFIRM_MODAL":
      return {
        ...state,
        confirmModal: {
          isOpen: false,
          type: null,
          payload: undefined,
        },
      };

    default:
      return state;
  }
}
