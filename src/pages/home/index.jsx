import React, { useEffect, useState, useCallback } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Card, Hero } from "./../../components";
import {
  getRecipes,
  getCategories,
  getIngredients,
  getArea,
  getSearchByCategories,
  getSearchByArea,
  getSearchByIngredients,
} from "../../services/api";
const Home = () => {
  const [searchedQuery, setSearchedQuery] = useState("chicken");
  const [catQuery, setCatQuery] = useState("");
  const [ingQuery, setIngQuery] = useState("");
  const [areaQuery, setAreaQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [ingredient, setIngredient] = useState([]);
  const [area, setArea] = useState([]);

  const handleChangeSearchBar = (e) => {
    console.log(e.target.value);
    setSearchedQuery(e.target.value);
  };

  const getSearchedCat = async () => {
    let cat = await getCategories();
    setCategories(cat);
  };

  const getSearchedArea = async () => {
    let area = await getArea();
    setArea(area);
  };
  const getSearchedIng = async () => {
    let ing = await getIngredients();
    setIngredient(ing);
  };

  useEffect(() => {
    getSearchedCat();
    getSearchedArea();
    getSearchedIng();
  }, []);

  const getSearchedResult = useCallback(async () => {
    let result = await getRecipes(searchedQuery);
    setRecipes(result);
  }, [searchedQuery]);

  const getSearchedCategory = useCallback(async () => {
    let result = await getSearchByCategories(catQuery);
    setRecipes(result);
  }, [catQuery]);

  useEffect(() => {
    if (catQuery !== "") {
      getSearchedCategory();
    } else {
      getSearchedResult();
    }
  }, [catQuery, getSearchedCategory, getSearchedResult]);

  const getSearchedAreas = useCallback(async () => {
    let result = await getSearchByArea(areaQuery);
    setRecipes(result);
  }, [areaQuery]);

  useEffect(() => {
    if (areaQuery !== "") {
      getSearchedAreas();
    } else {
      getSearchedResult();
    }
  }, [areaQuery, getSearchedAreas, getSearchedResult]);

  const getSearchedIngs = useCallback(async () => {
    let result = await getSearchByIngredients(ingQuery);
    setRecipes(result);
  }, [ingQuery]);

  useEffect(() => {
    if (ingQuery !== "") {
      getSearchedIngs();
    } else {
      getSearchedResult();
    }
  }, [ingQuery, getSearchedIngs, getSearchedResult]);

  useEffect(() => {
    getSearchedResult();
  }, [getSearchedResult]);

  return (
    <>
      <Hero />
      <div className="py-4">
        <div className="container d-flex justify-content-center gap-2">
          <select
            className="rounded-4 border outline-none w-25"
            value={ingQuery}
            onChange={(e) => {
              setIngQuery(e.target.value);
            }}
          >
            <option>Select Ingredients</option>
            {ingredient.map((v, i) => {
              return (
                <option value={v.strIngredient} key={i}>
                  {v.strIngredient}
                </option>
              );
            })}
          </select>
          <select
            className="rounded-4 border outline-none w-25"
            value={areaQuery}
            onChange={(e) => setAreaQuery(e.target.value)}
          >
            <option>Select Area</option>
            {area.map((v, i) => {
              return (
                <option value={v.strArea} key={i}>
                  {v.strArea}
                </option>
              );
            })}
          </select>
          <select
            className="rounded-4 border outline-none w-25"
            onChange={(e) => setCatQuery(e.target.value)}
            value={catQuery}
          >
            <option>Select Category</option>
            {categories.map((v, i) => {
              return (
                <option value={v.strCategory} key={i}>
                  {v.strCategory}
                </option>
              );
            })}
          </select>
          <div
            className="d-flex align-items-center rounded-4 border p-2 gap-3"
            style={{ width: "100%", maxWidth: "500px" }}
          >
            <AiOutlineSearch className="h3 m-0 p-0 text-secondary" />{" "}
            <input
              type="text"
              className="border-0 m-0 w-100"
              placeholder="Search..."
              onChange={handleChangeSearchBar}
              value={searchedQuery}
            />
          </div>
        </div>

        <div className="bg-light p-0 m-0 mt-5" style={{ minHeight: "600px" }}>
          <div className="mx-md-5 mx-3">
            <div className="px-4 py-5 row">
              {recipes &&
                recipes?.map((v, i) => {
                  return (
                    <div
                      className="col-12 col-md-3 col-sm-12 col-xs-12 p-0 m-0 mb-2 mb-sm-0 p-2"
                      key={i}
                    >
                      <Card key={i} data={v} />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
