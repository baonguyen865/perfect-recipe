import React from "react";
import "./hero.css";
const Hero = () => {
  return (
    <div className="hero">
      <div className="row p-0 m-0 py-2 align-items-center py-5">
        <div className="col-md-8 col-12 p-0 m-0 p-4 bg_gray">
          <p className="p-0 m-0  text-white pb-4 fw-bold">
            Welcome to our recipe finder website.
          </p>
          <p className="p-0 m-0  text-white">
            Discover a world of culinary delights with our recipe finder
            website! Whether you're a seasoned chef or a kitchen novice, our
            extensive collection of mouthwatering recipes will inspire and
            excite your taste buds. From international cuisines to comfort
            classics, finding the perfect recipe has never been easier. Elevate
            your cooking experience and embark on a flavorful journey with us.
            Welcome to a treasure trove of gastronomic possibilities!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
