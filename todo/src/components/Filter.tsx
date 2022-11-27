import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { filterAtom } from "../stores/store";
import { Radio, Label } from "flowbite-react";

const Filter = () => {
  const [filter, setFilter] = useAtom(filterAtom);
  const onToggleRadio = (e) => {
    setFilter(e.target.value);
  };
  useEffect(() => {
    console.log(filter);
  }, [filter]);

  return (
    <div className="container mx-auto  px-4 bg-red-700 flex space-x-4 justify-center">
      <div className="container flex items-center justify-center bg-blue-700 basis-1/4 ">
        <input
          id="inline-radio"
          type="radio"
          value="all"
          name="inline-radio-group"
          checked={filter === "all"}
          onChange={(e) => {
            onToggleRadio(e);
          }}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor="inline-radio"
          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          All
        </label>
      </div>
      <div className="container bg-blue-700 flex justify-center items-center basis-1/4">
        <input
          id="inline-2-radio"
          type="radio"
          value="completed"
          name="inline-radio-group"
          checked={filter === "completed"}
          onChange={(e) => {
            onToggleRadio(e);
          }}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor="inline-2-radio"
          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Completed
        </label>
      </div>
      <div className="container bg-blue-700 flex justify-center items-center basis-2/4">
        <input
          id="inline-3-radio"
          type="radio"
          value="incompleted"
          name="inline-radio-group"
          checked={filter === "incompleted"}
          onChange={(e) => {
            onToggleRadio(e);
          }}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor="inline-3-radio"
          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Incompleted
        </label>
      </div>
    </div>
  );
};

export default Filter;
