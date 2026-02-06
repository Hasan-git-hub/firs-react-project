import React from "react";
import planalto from "./assets/planalto.png";

const Collection = () => {
  return (
    <div>
      <section className="wrapper">
        <div className="collection contain">
          <h2 className="collection__main-title">Our collection</h2>

          <div className="collection__cards">
            <div className="collection__items">
              <img className="collection__img" src={planalto} alt="coffee" />
              <h2 className="items__title">Gran Espresso</h2>
              <p className="items__text">
                Light and flavorful blend with cocoa and black pepper for an
                intense experience
              </p>
            </div>
            <div className="collection__items">
              <img className="collection__img" src={planalto} alt="coffee" />
              <h2 className="items__title">Planalto</h2>
              <p className="items__text">
                Brazilian dark roast with rich and velvety body, and hints of
                fruits and nuts
              </p>
            </div>
            <div className="collection__items">
              <img className="collection__img" src={planalto} alt="coffee" />
              <h2 className="items__title">Piccollo</h2>
              <p className="items__text">
                Mild and smooth blend featuring notes of toasted almond and
                dried cherry
              </p>
            </div>
            <div className="collection__items">
              <img className="collection__img" src={planalto} alt="coffee" />
              <h2 className="items__title">Danche</h2>
              <p className="items__text">
                Ethiopian hand-harvested blend densely packed with vibrant fruit
                notes
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Collection;
