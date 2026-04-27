import React, { useReducer } from "react";
import { mockBooks } from "../services/mockData";
import type { AppState } from "./types";
import { reducer } from "./reducer";
import { AppContext } from "./AppContext";

const initialState: AppState = {
  books: mockBooks,
};

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}
