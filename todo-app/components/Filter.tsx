import { useAtom } from "jotai";
import { filterAtom } from "../stores/store";
import { Radio, Label } from "flowbite-react";

const Filter = () => {
  const [filter, setFilter] = useAtom(filterAtom);

  return (
    <div>
      <fieldset className="flex flex-row gap-4" id="radio">
        <div className="flex items-center gap-2">
          <Radio
            id="radio-1"
            name="filter-type"
            value="all"
            checked={filter === "all"}
            onChange={(e) => setFilter(e.target.value)}
          />
          <Label htmlFor="radio-1">All</Label>
        </div>
        <div className="flex items-center gap-2">
          <Radio
            id="radio-2"
            name="filter-type"
            value="completed"
            checked={filter === "completed"}
            onChange={(e) => setFilter(e.target.value)}
          />
          <Label htmlFor="radio-2">Completed</Label>
        </div>
        <div className="flex items-center gap-2">
          <Radio
            id="radio-3"
            name="filter-type"
            value="incompleted"
            checked={filter === "incompleted"}
            onChange={(e) => setFilter(e.target.value)}
          />
          <Label htmlFor="radio-3">Incompleted</Label>
        </div>
      </fieldset>
    </div>
  );
};

export default Filter;
