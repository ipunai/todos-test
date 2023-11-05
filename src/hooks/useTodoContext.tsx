import { useContext } from "react";
import { Context } from "../context/Context";
import { type ContextProps } from "../context/Context.types";

export const useTodoContext = () => useContext<ContextProps>(Context);
