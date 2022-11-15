// Use throughout your app instead of plain `useDispatch` and `useSelector`
/*import { AppDispatch } from "../store";
import { useDispatch } from "react-redux";*/

import { useDispatch } from "react-redux";
import type { AppDispatch } from "../store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
