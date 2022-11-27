import { PrimitiveAtom } from "jotai";

export type Todo = {
  title: string;
  completed: boolean;
};

export type RemoveFn = (item: PrimitiveAtom<Todo>) => void;

export type TodoItemProps = {
  atom: PrimitiveAtom<Todo>;
  remove: RemoveFn;
};
