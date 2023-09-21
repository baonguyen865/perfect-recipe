import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRecipe } from "../../services/api";
import { Link } from "react-router-dom";
const Home = () => {
  const [recipe, setRecipe] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      let result = await getRecipe(id);
      setRecipe(result);
    };
    getData();
  }, [id]);

  return (
    <div className="container py-5">
      <div className="d-flex align-items-center gap-5">
        <div>
          <Link
            to={"/"}
            className="text-decoration-none p-2 d-inline-flex bg_primary fw-bold text-white mb-3"
          >
            Go Back
          </Link>
          <div style={{maxWidth: '500px'}}>
            <img src={recipe?.strMealThumb} alt="" width='100%'/>
          </div>
        </div>
        <div>
          <h3 className="p-0 m-0 text_primary fw-bold pb-5">
            {recipe?.strMeal}
          </h3>
          <p className="p-0 m-0 text_primary text-sm fw-bold">
            Meal Id: {recipe?.idMeal}
          </p>

          <p className="p-0 m-0 text_primary text-sm fw-bold">
            Category: {recipe?.strCategory}
          </p>
          <p className="p-0 m-0 text_primary text-sm fw-bold">
            Cuisine: {recipe?.strArea}
          </p>
        </div>
      </div>
      <h4 className="p-0 m-0 text_primary fw-bold py-4">Ingredients</h4>

      <div>
        <div className="d-flex gap-2">
          <p className="p-0 m-0">
            {recipe?.strIngredient1} {recipe?.strMeasure1}
          </p>
        </div>
        <div className="d-flex gap-2">
          <p className="p-0 m-0">
            {recipe?.strIngredient2} {recipe?.strMeasure2}
          </p>
        </div>
        <div className="d-flex gap-2">
          <p className="p-0 m-0">
            {recipe?.strIngredient3} {recipe?.strMeasure3}
          </p>
        </div>
        <div className="d-flex gap-2">
          <p className="p-0 m-0">
            {recipe?.strIngredient4} {recipe?.strMeasure4}
          </p>
        </div>
        <div className="d-flex gap-2">
          <p className="p-0 m-0">
            {recipe?.strIngredient5} {recipe?.strMeasure5}
          </p>
        </div>
        <div className="d-flex gap-2">
          <p className="p-0 m-0">
            {recipe?.strIngredient6} {recipe?.strMeasure6}
          </p>
        </div>
        <div className="d-flex gap-2">
          <p className="p-0 m-0">
            {recipe?.strIngredient7} {recipe?.strMeasure7}
          </p>
        </div>
        <div className="d-flex gap-2">
          <p className="p-0 m-0">
            {recipe?.strIngredient8} {recipe?.strMeasure8}
          </p>
        </div>
        <div className="d-flex gap-2">
          <p className="p-0 m-0">
            {recipe?.strIngredient9} {recipe?.strMeasure9}
          </p>
        </div>
        <div className="d-flex gap-2">
          <p className="p-0 m-0">
            {recipe?.strIngredient10} {recipe?.strMeasure10}
          </p>
        </div>
      </div>
      <h4 className="p-0 m-0 text_primary fw-bold py-4">Summary</h4>
      <p
        className="p-0 m-0"
        dangerouslySetInnerHTML={{ __html: recipe?.strInstructions }}
      ></p>
    </div>
  );
};

export default Home;
