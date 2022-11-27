import { useAtom } from "jotai";
import { TodoItemProps } from "../types/type";

const TodoItem = ({ atom, remove }: TodoItemProps) => {
  const [item, setItem] = useAtom(atom);
  const toggleCompleted = () => {
    setItem((props) => ({ ...props, completed: !props.completed }));
  };

  return (
    <>
      <input
        type="checkbox"
        checked={item.completed}
        onChange={toggleCompleted}
      />
      <span style={{ textDecoration: item.completed ? "line-through" : "" }}>
        {item.title}
      </span>
      <button
        onClick={() => {
          remove;
        }}
      >
        X
      </button>
    </>
  );
};
