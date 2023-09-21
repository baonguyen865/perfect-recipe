import axios from "axios";
export const getRecipes = async (searchQury) => {
  try {
    let response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchQury}`
    );
    return response.data.meals;
    // console.log(response)
  } catch (err) {
    console.log("Error while calling API", err.message);
  }
};

export const getRecipe = async (id) => {
  try {
    let response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    return response.data.meals[0];
  } catch (error) {
    console.log("Error while calling the api ", error.message);
  }
};

export const getCategories = async (id) => {
  try {
    let response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/list.php?c=list`
    );
    return response.data.meals;
  } catch (error) {
    console.log("Error while calling the api ", error.message);
  }
};
export const getArea = async (id) => {
  try {
    let response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/list.php?a=list`
    );
    return response.data.meals;
  } catch (error) {
    console.log("Error while calling the api ", error.message);
  }
};

export const getIngredients = async (id) => {
  try {
    let response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/list.php?i=list`
    );
    return response.data.meals;
  } catch (error) {
    console.log("Error while calling the api ", error.message);
  }
};

export const getSearchByCategories = async (cat) => {
  try {
    let response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`
    );
    return response.data.meals;
  } catch (err) {
    console.log("Error while calling API", err.message);
  }
};


export const getSearchByArea = async (area) => {
  try {
    let response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
    );
    return response.data.meals;
  } catch (err) {
    console.log("Error while calling API", err.message);
  }
};



export const getSearchByIngredients = async (ing) => {
  try {
    let response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ing}`
    );
    return response.data.meals;
  } catch (err) {
    console.log("Error while calling API", err.message);
  }
};
