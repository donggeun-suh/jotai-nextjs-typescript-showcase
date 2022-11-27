import { Provider } from "jotai";
import Filter from "../components/Filter";

export default function Home() {
  return (
    <Provider>
      <div>
        <Filter />
      </div>
    </Provider>
  );
}
