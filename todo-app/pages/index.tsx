import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Provider } from "jotai";
import TodoList from "../components/TodoList";

export default function Home() {
  return (
    <Provider>
      <div className="font-serif h-screen p-4 flex flex-col ">
        <div>
          <TodoList />
        </div>
      </div>
    </Provider>
  );
}
