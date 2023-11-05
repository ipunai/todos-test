import { createContext } from "react";
import { type ContextProps } from "./Context.types";

export const Context = createContext<ContextProps>({} as ContextProps);
