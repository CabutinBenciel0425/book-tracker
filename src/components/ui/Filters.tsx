import { useState } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
import Button from "./Button";

function Filters() {
  const [activeFilterType, setActiveFilterType] = useState<string>("all");
  const filterButtons: string[] = ["all", "reading", "completed", "to-read"];

  function handleFilterButton(type: string) {
    setActiveFilterType(type);
  }

  return (
    <div className="flex flex-row justify-between items-center gap-4 text-main-accent w-full px-60">
      <div className="flex flex-row items-center justify-around gap-10">
        {filterButtons.map((type) => (
          <Button
            onClick={() => handleFilterButton(type)}
            typeName="filter"
            className={`text-lg px-6 py-1 cursor-pointer rounded-md ${activeFilterType === type ? "bg-main-accent text-neutral-100 border-2 border-main-accent" : "bg-transparent border-2 border-main-border"}`}
          >
            {`${capitalizeFirstLetter(type)} (10)`}
          </Button>
        ))}
      </div>

      <div className="flex items-center justify-center">
        <select className="bg-transparent border-2 border-main-border text-lg px-6 py-1.5 cursor-pointer rounded-md outline-none">
          <option value="recent">Sort by: Recent</option>
          <option value="oldest">Sort by: Oldest</option>
        </select>
      </div>
    </div>
  );
}

export default Filters;
