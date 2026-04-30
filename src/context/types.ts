import type React from "react";
import type { Book } from "./../features/books/bookTypes";

export interface AppState {
  books: Book[];
  confirmModal: {
    isOpen: boolean;
    type: "delete" | "clear" | null;
    payload?: string;
  };
}

export type Action =
  | { type: "ADD_BOOK"; payload: Book }
  | { type: "DELETE_BOOK"; payload: string }
  | { type: "UPDATE_BOOK"; payload: Book }
  | { type: "TOGGLE_FAVORITE"; payload: string }
  | { type: "TOGGLE_RATING"; payload: { id: string; rating: number } }
  | {
      type: "OPEN_CONFIRM_MODAL";
      payload: { type: "delete" | "clear"; payload?: string };
    }
  | { type: "CLOSE_CONFIRM_MODAL" };

export type AppContextType = {
  state: AppState;
  dispatch: React.Dispatch<Action>;
};
