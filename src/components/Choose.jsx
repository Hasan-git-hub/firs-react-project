import React from "react";

const Choose = () => {
  return (
    <div>
      <section className="choose__wrapper wrapper">
        <div className="choose contain">
          <h2 className="choose__title">Why choose us?</h2>
          <p className="choose__text">
            A large part of our role is choosing which particular coffees will
            be featured in our range. This means working closely with the best
            coffee growers to give you a more impactful experience on every
            level.
          </p>

          <div className="choose__cards">
            <div className="choose__items">
              <div
                className="choose__icon choose__icon--bean"
                aria-hidden="true"
              />
              <h2 className="choose__items-title">Best quality</h2>
              <p className="choose__item-text">
                Discover an endless variety of the world’s best artisan coffee
                from each of our roasters.
              </p>
            </div>
            <div className="choose__items">
              <div
                className="choose__icon choose__icon--gift"
                aria-hidden="true"
              />
              <h2 className="choose__items-title">Exclusive benefits</h2>
              <p className="choose__item-text">
                Special offers and swag when you subscribe, including 30% off
                your first shipment.
              </p>
            </div>
            <div className="choose__items">
              <div
                className="choose__icon choose__icon--truck"
                aria-hidden="true"
              />
              <h2 className="choose__items-title">Free shipping</h2>
              <p className="choose__item-text">
                We cover the cost and coffee is delivered fast. Peak freshness:
                guaranteed.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Choose;
