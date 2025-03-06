import React from "react";
import FilteringDropDownMenu from "./dropdownMenu";
import ResetFiltersButton from "./resrtFiltersButton";

const Filtering = () => {
  return (
    <div className="flex flex-col items-center sm:flex-row sm:justify-center gap-4 pb-4">
      <div className="flex justify-center gap-4">
        <FilteringDropDownMenu type="status" />
        <FilteringDropDownMenu type="gender" />
      </div>

      {/* reset */}
      <ResetFiltersButton />
    </div>
  );
};

export default Filtering;
