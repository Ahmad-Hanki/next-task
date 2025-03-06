"use server";
import axios from "axios";

const getRickAndMortyData = async (
  gender: GenderType | string,
  status: StatusType | string,
  page: string,
  // getting those filters from the searchParams, from the home page
) => {
  const query = `?${gender ? `gender=${gender}&` : ""}${
    status ? `status=${status}&` : ""
  }${page ? `page=${page}&` : ""}`.slice(0, -1);

  const endpoint = `https://rickandmortyapi.com/api/character${query}`;

  try {
    const response = await axios.get(endpoint);

    const data = await response.data;

    return {
      characters: data?.results as CharacterType[],
      info: data?.info as InfoType,
    };
  } catch (err) {
    console.log(err, "error");
  }
};

export default getRickAndMortyData;
