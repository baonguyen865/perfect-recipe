import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineHeart, AiOutlineEye, AiFillHeart } from "react-icons/ai";

const Coupon = ({ data, fav }) => {
  const addFav = () => {
    let storedData = JSON.parse(localStorage.getItem("myFav"));
    storedData = storedData == null ? [] : storedData;
    const newObj = data;
    if (
      storedData === [] ||
      !storedData.some((item) => item.idMeal === newObj.idMeal)
    ) {
      const updatedArray = [...storedData, newObj];
      localStorage.setItem("myFav", JSON.stringify(updatedArray));
    }
  };

  const removeFav = () => {
    let newData = JSON.parse(localStorage.getItem("myFav"));
    const updatedArray = newData.filter(
      (item) => item.idMeal !== data.idMeal
    );
    localStorage.setItem("myFav", JSON.stringify(updatedArray));
    window.location.reload()
  };
  return (
    <>
      <div className="bg-white rounded p-0 m-0 mb-md-2 pointer-event">
        <div className="text-decoration-none text-dark">
          <div className="">
            <img
              src={data.strMealThumb}
              alt="coupon Images"
              style={{
                width: "100%",
                minHeight: "200px",
                maxHeight: "200px",
              }}
              className="rounded-top object-fit-cover"
            />
          </div>
          <div className="px-2 py-2">
            <div>
              <h4 className="p-0 m-0 text_primary fw-bold">
                {data.strMeal.length > 30
                  ? data.strMeal.slice(0, 30) + "..."
                  : data.strMeal}
              </h4>
            </div>
            <div>
              <div className="my-2 d-flex justify-content-between align-items-center">
                <div>
                  <Link
                    to={`/recipe/${data.idMeal}`}
                    className="text-white fw-bold text-center rounded p-0 m-0 p-2 bg_primary d-flex align-items-center"
                  >
                    <AiOutlineEye className="p-0 m-0" />
                  </Link>
                </div>
                {fav ? (
                  <button
                    className="btn border-none outline-none bg-transparent d-flex align-items-center justify-content-center "
                    onClick={() => removeFav()}
                  >
                    <AiFillHeart className="text_primary h4 p-0 m-0" />
                  </button>
                ) : (
                  <button
                    className="btn border-none outline-none bg-transparent d-flex align-items-center justify-content-center "
                    onClick={() => addFav()}
                  >
                    <AiOutlineHeart className="text_primary h4 p-0 m-0" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Coupon;
