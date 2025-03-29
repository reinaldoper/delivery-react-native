const URL = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='



const fetchCocktailDetails = async (id) => {
  try {
    const response = await fetch(`${URL}${id}`);
    const data = await response.json();
    return data.drinks[0];
  } catch (error) {
    console.error(error);
  }
}

export default fetchCocktailDetails;