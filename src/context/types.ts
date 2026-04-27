import type React from "react";
import type { Book } from "./../features/books/bookTypes";

export interface AppState {
  books: Book[];
}

export type Action =
  | { type: "ADD_BOOK"; payload: Book }
  | { type: "DELETE_BOOK"; payload: string }
  | { type: "UPDATE_BOOK"; payload: Book }
  | { type: "TOGGLE_FAVORITE"; payload: string };

export type AppContextType = {
  state: AppState;
  dispatch: React.Dispatch<Action>;
};
