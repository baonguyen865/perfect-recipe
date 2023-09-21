import React, { useEffect, useState } from "react";
import { Card } from "../../components";

const Favourite = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    let storedData = JSON.parse(localStorage.getItem("myFav"));
    if(storedData !== null){
      setRecipes(storedData)
    }
  }, []);

  return (
    <>
      <div className="container py-4 pt-5">
        <h3 className="p-0 m-0 text_primary fw-bold text-center">
          My Favourite Recipes
        </h3>
      </div>
      <div className="pb-4">
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
                      <Card key={i} data={v} fav={true}/>
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

export default Favourite;
