import React from 'react';
import FilteringDropDownMenu from './dropdownMenu';

const Filtering = () => {
  return (
    <div className="flex flex-col items-center gap-4 pb-4 sm:flex-row sm:justify-center">
      <div className="flex justify-center gap-4">
        <FilteringDropDownMenu type="status" />
        <FilteringDropDownMenu type="gender" />
      </div>
    </div>
  );
};

export default Filtering;
