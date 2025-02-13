import { apiKey } from "./Utilities/YelpAPI";

export const getBusinessListings = async (
  searchTerm,
  location,
  selectedOption
) => {
  const result = await fetch(
    `https://api.yelp.com/v3/businesses/search?location=${location}&term=${searchTerm}&categories=&sort_by=${selectedOption}&limit=20`,
    {
      headers: {
        accept: "application/json",
        authorization: `Bearer ${apiKey}`,
      },
    }
  );
  return await result.json();
};
