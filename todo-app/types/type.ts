import { PrimitiveAtom } from "jotai";
export type Todo = {
  title: string;
  completed: boolean;
};
export type RemoveFn = (todo: PrimitiveAtom<Todo>) => void;
export type TodoItemProp = {
  atom: PrimitiveAtom<Todo>;
  remove: RemoveFn;
};
export type FilteredProp = {
  remove: RemoveFn;
};
