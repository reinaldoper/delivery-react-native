const URL = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c='


const fetchFilterCategory = async (strCategory) => {
  const response = await fetch(`${URL}${strCategory}`);
  const data = await response.json();
  return data.drinks;
}


export default fetchFilterCategory;