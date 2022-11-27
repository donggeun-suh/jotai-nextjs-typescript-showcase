import Filter from "./Filter";
import Filtered from "./Filtered";
import { Label, TextInput } from "flowbite-react";
import { FormEvent, useState } from "react";
import { atom, useSetAtom } from "jotai";
import { todosAtom } from "../stores/store";
import { Todo } from "../types/type";
import { RemoveFn } from "../types/type";

const TodoList = () => {
  const setTodos = useSetAtom(todosAtom);
  const [input, setInput] = useState("");
  const add = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(input);
    setTodos((todos) => [
      ...todos,
      atom<Todo>({ title: input, completed: false }),
    ]);
    setInput("");
  };
  const remove: RemoveFn = (todo) =>
    setTodos((prev) => prev.filter((item) => item !== todo));
  return (
    <div className="">
      <div className="fixed top-0 left-0 right-0 flex flex-col p-4 bg-gray-300 ">
        <p className="text-2xl mb-2">Donggeun's Todo</p>
        <Filter />
        <div className="mt-4">
          <form onSubmit={add}>
            <TextInput
              id="base"
              type="text"
              sizing="xl"
              placeholder="Type..."
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
          </form>
        </div>
      </div>
      <div className="pt-32">
        <Filtered remove={remove} />
      </div>
    </div>
  );
};

export default TodoList;
