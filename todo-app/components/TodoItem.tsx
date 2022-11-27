import { Card, Button } from "flowbite-react";
import { PrimitiveAtom, useAtom } from "jotai";
import { todosAtom } from "../stores/store";
import { RemoveFn, TodoItemProp } from "../types/type";
import { Todo } from "../types/type";

const TodoItem = ({
  key,
  atom,
  remove,
}: {
  key: number;
  atom: PrimitiveAtom<Todo>;
  remove: RemoveFn;
}) => {
  const [item, setItem] = useAtom(atom);
  const [todos, setTodos] = useAtom(todosAtom);
  const onCheckToggle = () => {
    setItem((item) => ({ ...item, completed: !item.completed }));
  };

  return (
    <div>
      <Card className="my-4">
        <div className="flex flex-row justify-between items-center">
          <div>
            <input
              type="checkbox"
              checked={item.completed}
              onChange={onCheckToggle}
            />
          </div>
          <div>
            <span
              className={item.completed ? "text-md line-through" : "text-md"}
            >
              {item.title}
            </span>
          </div>
          <Button
            color="green"
            size={"xs"}
            onClick={() => {
              remove(atom);
            }}
          >
            Delete
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default TodoItem;
