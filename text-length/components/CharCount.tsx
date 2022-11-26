import { useAtom } from "jotai";
import { textLengthAtom } from "store/store";

const CharCount = () => {
  const [len] = useAtom(textLengthAtom);

  return <div>The length is {len}</div>;
};

export default CharCount;
