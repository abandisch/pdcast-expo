import {
  TypedUseSelectorHook,
  useDispatch as reduxUseDispatch,
  useSelector as reduxUseSelector,
} from "react-redux";
import type { AppDispatch, RootState } from "@pdcast/lib/types";

export const useDispatch: () => AppDispatch = reduxUseDispatch;
export const useSelector: TypedUseSelectorHook<RootState> = reduxUseSelector;
