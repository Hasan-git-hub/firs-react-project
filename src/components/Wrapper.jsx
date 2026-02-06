import React from "react";

const Wrapper = () => {
  return (
    <div>
      <section className="wrapper">
        <div className="works contain">
          <h2 className="works__title">How it works</h2>

          <div className="works__cards">
            <div className="works__items">
              <h2 className="works__items-title">01</h2>
              <h2 className="works__items-sup-title">Pick your coffee</h2>
              <p className="works__items-text">
                Select from our evolving range of artisan coffees. Our beans are
                ethically sourced and we pay fair prices for them. There are new
                coffees in all profiles every month for you to try out.
              </p>
            </div>
            <div className="works__items">
              <h2 className="works__items-title">02</h2>
              <h2 className="works__items-sup-title">Choose the frequency</h2>
              <p className="works__items-text">
                Customize your order frequency, quantity, even your roast style
                and grind type. Pause, skip or cancel your subscription with no
                commitment through our online portal.
              </p>
            </div>
            <div className="works__items">
              <h2 className="works__items-title">03</h2>
              <h2 className="works__items-sup-title">Receive and enjoy!</h2>
              <p className="works__items-text">
                We ship your package within 48 hours, freshly roasted. Sit back
                and enjoy award-winning world-class coffees curated to provide a
                distinct tasting experience.
              </p>
            </div>
          </div>

          <button className="button">Create your plan</button>
        </div>
      </section>
    </div>
  );
};

export default Wrapper;
