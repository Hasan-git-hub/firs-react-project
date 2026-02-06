import React from "react";
import bg from "./assets/intro.png";

const Intro = () => {
  return (
    <div>
      <div className="intro__wrapper wrapper">
        <div
          className="intro contain"
          style={{ background: `url(${bg}) no-repeat center/cover` }}
        >
          <div className="intro__div">
            <h2 className="intro__title">Great coffee made simple.</h2>
            <p className="intro__text">
              Start your mornings with the world’s best coffees. Try our
              expertly curated artisan coffees from our best roasters delivered
              directly to your door, at your schedule.
            </p>
            <button className="button">Create your plan</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
