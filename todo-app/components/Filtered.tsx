import { filteredAtom } from "../stores/store";
import { useAtom, useSetAtom } from "jotai";
import TodoItem from "./TodoItem";
import { FilteredProp, RemoveFn } from "../types/type";

const Filtered = ({ remove }: FilteredProp) => {
  const [todos] = useAtom(filteredAtom);
  const filteredList = todos.map((todo, index) => {
    return <TodoItem key={index} atom={todo} remove={remove} />;
  });
  return <div>{filteredList}</div>;
};

export default Filtered;
