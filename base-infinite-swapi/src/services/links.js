export const fetchPeople = async (pageUrl) => {
  try {
    const response = await fetch(pageUrl);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);

  }
}

export const fetchSpecies = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
