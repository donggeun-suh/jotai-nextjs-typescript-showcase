import { useAtom } from "jotai";
import { upperCaseAtom } from "store/store";

const UpperCase = () => {
  const [upperCase] = useAtom(upperCaseAtom);
  return <div>upper case version is {upperCase}</div>;
};

export default UpperCase;
