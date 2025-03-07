'use client';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import filteringData from '@/lib/filteringData';
import { useQueryState } from 'nuqs';
// import useFilteringStore from "@/store/filteringStore";

const FilteringDropDownMenu = ({ type }: FilteringDropDownMenuProps) => {
  // const {   status: zusStat,    gender: zusGen,   setStatus,    setGender,    resetFilters, } = useFilteringStore(); // zustand
  // just showing the way if zustand usage:

  const [filteredType, setFilteredType] = useQueryState(type); // using nuqs

  const filters = filteringData(type); // getting the right data based on the type

  const handleSelectChange = (value: string) => {
    // if (type == "status") {
    // // zustand
    //   setStatus(value as StatusType);
    // } else {
    //   setGender(value as GenderType);
    // }

    // i don't need zustand for the filtering, just showing it.
    if (value === 'reset') {
      setFilteredType(null, { shallow: false }); // Reset the state
    } else {
      setFilteredType(value, { shallow: false });
    }
  };

  return (
    <div>
      <Select onValueChange={handleSelectChange} value={filteredType ?? ''}>
        <SelectTrigger className="w-[180px]">
          <SelectValue
            placeholder={
              type == 'status' ? 'Select a Status' : 'Select a Gender'
            }
          />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel className="capitalize">{type}</SelectLabel>
            {filteredType && (
              <SelectItem key="reset" value="reset" className="text-red-500">
                Clear Selection
              </SelectItem>
            )}
            {filters.map(data => (
              <SelectItem className="capitalize" key={data} value={data}>
                {data}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default FilteringDropDownMenu;
