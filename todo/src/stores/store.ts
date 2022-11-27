import { atom, PrimitiveAtom } from "jotai";
import { Todo } from "../types/type";

export const filterAtom = atom<string>("all");
export const todosAtom = atom<PrimitiveAtom<Todo>[]>([]);
export const filteredAtom = atom((get) => {
  const filter = get(filterAtom);
  const todos = get(todosAtom);
  if (filter === "all") return todos;
  else if (filter === "completed")
    return todos.filter((todo) => get(todo).completed);
  else return todos.filter((todo) => !get(todo).completed);
});
