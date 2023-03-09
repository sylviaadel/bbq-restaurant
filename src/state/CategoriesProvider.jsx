import { createContext, useReducer, useContext, useState } from "react";
import { categoriesReducer } from "./CategoriesReducer";
import { categories } from "../scripts/tests/data";

const Context = createContext(null);

export function CategoriesProvider({ children }) {
  const [data, dispatch] = useReducer(categoriesReducer, []);
  const values = { data, dispatch };

  return <Context.Provider value={values}>{children}</Context.Provider>;
}

export function TestCategoriesProvider({ children }) {
  const [data, setData] = useState(categories);
  const values = { data, setData };

  return <Context.Provider value={values}>{children}</Context.Provider>;
}

export function useCategories() {
  const context = useContext(Context);
  const msg =
    "useCategories() only works if the parent component is wrapped up inside the <CategoriesProvider>";
  if (!context) throw new Error(msg);

  return context;
}
