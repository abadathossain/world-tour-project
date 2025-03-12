const getStoredCountry = () => {
  const storedCountry = localStorage.getItem("country");
  if (storedCountry) {
    return JSON.parse(storedCountry);
  }
  return [];
};

const storeCountry = (country) => {
  const countryStringified = JSON.stringify(country);
  localStorage.setItem("country", countryStringified);
};

const addtoLS = (id) => {
  const storedCountry = getStoredCountry();
  const newStoredCountry = [...storedCountry, id];
  storeCountry(newStoredCountry);
};
export { getStoredCountry, storeCountry, addtoLS };
