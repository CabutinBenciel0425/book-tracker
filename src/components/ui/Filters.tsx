import React, { type SetStateAction } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
import Button from "./Button";
import type {
  FilterTypes,
  SortOptionTypes,
} from "../../features/books/BooksPage";

type FiltersPropsType = {
  setFilterType: React.Dispatch<
    SetStateAction<"all" | "reading" | "completed" | "to-read">
  >;
  setSortOption: React.Dispatch<SetStateAction<"recent" | "oldest">>;
  filterType: FilterTypes;
  sortOption: SortOptionTypes;
};

function Filters({
  setFilterType,
  setSortOption,
  filterType,
  sortOption,
}: FiltersPropsType) {
  const filterButtons: FilterTypes[] = [
    "all",
    "reading",
    "completed",
    "to-read",
  ];

  function handleFilterButton(type: FilterTypes) {
    setFilterType(type);
  }

  return (
    <div className="flex flex-row justify-between items-center gap-4 text-main-accent w-full px-60">
      <div className="flex flex-row items-center justify-around gap-10">
        {filterButtons.map((type) => (
          <Button
            onClick={() => handleFilterButton(type)}
            typeName="filter"
            className={`shrink-0 text-lg px-6 py-1 cursor-pointer rounded-md ${filterType === type ? "bg-main-accent text-neutral-100 border-2 border-main-accent" : "bg-transparent border-2 border-main-border"}`}
          >
            {`${capitalizeFirstLetter(type)} (10)`}
          </Button>
        ))}
      </div>

      <div className="flex items-center justify-center">
        <select
          className="bg-transparent border-2 border-main-border text-lg px-6 py-1.5 cursor-pointer rounded-md outline-none"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value as SortOptionTypes)}
        >
          <option value="recent">Sort by: Recent</option>
          <option value="oldest">Sort by: Oldest</option>
        </select>
      </div>
    </div>
  );
}

export default Filters;
