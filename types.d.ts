interface HomeType {
  searchParams: Promise<{
    status: string;
    gender: string;
    page: string;
  }>;
}

type InfoType = {
  count: number;
  pages: number;
  next: string | null; // next can be a URL string or null if there's no next page
  prev: string | null; // prev can be a URL string or null if there's no previous page
};

type LocationType = {
  name: string;
  url: string;
};
type StatusType = "unknown" | "Alive" | "Dead";
type GenderType = "unknown" | "Male" | "Female";

interface FilteringDropDownMenuProps {
  type: "status" | "gender";
}

type CharacterType = {
  id: number;
  name: string;
  status: status;
  species: string;
  type: string;
  gender: GenderType;
  origin: LocationType;
  location: LocationType;
  image: string;
  url: string;
  created: string;
};

interface CardItemProps {
  status: string;
  gender: string;
  page: string;
}

type FilteringStoreType = {
  status: StatusType | null;
  gender: GenderType | null;
  setStatus: (status: StatusType | null) => void;
  setGender: (gender: GenderType | null) => void;
  resetFilters: () => void;
};
