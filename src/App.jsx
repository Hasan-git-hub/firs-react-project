import "./App.css";

import logo from "./assets/logo.png";
import bg from "./assets/intro.png";
import planalto from "./assets/planalto.png";
import logotip from "./assets/logotip.png";

function App() {
  return (
    <div>
      <header className="about-header-cont">
        <div className="about-header">
          <div className="about-header-box container">
            <img src={logotip} alt="logo" className="navbar-img" />
            <ul className="navbar-list">
              <li className="navbar-item">HOME</li>
              <li className="navbar-item">ABOUT US</li>
              <li className="navbar-item">CREATE YOUR PLAN</li>
            </ul>
          </div>
        </div>
      </header>
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
      <footer>
        <div className="wrapper">
          <div className="footer contain">
            <div className="footer__left-box">
              <div className="footer__left">
                <img src={logo} alt="logo" className="footer-img" />
                <ul className="footer-list">
                  <li className="footer-items">HOME</li>
                  <li className="footer-items">ABOUT US</li>
                  <li className="footer-items">CREATE YOUR PLAN</li>
                </ul>
              </div>
            </div>
            <div className="footer__right">
              <svg
                className="footer__icons facebook"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentcolor"
                  d="M20.9 2H3.1A1.1 1.1 0 0 0 2 3.1v17.8A1.1 1.1 0 0 0 3.1 22h9.58v-7.75h-2.6v-3h2.6V9a3.64 3.64 0 0 1 3.88-4a20.26 20.26 0 0 1 2.33.12v2.7H17.3c-1.26 0-1.5.6-1.5 1.47v1.93h3l-.39 3H15.8V22h5.1a1.1 1.1 0 0 0 1.1-1.1V3.1A1.1 1.1 0 0 0 20.9 2Z"
                />
              </svg>
              <svg
                className="footer__icons twiter"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentcolor"
                  d="M22 5.8a8.49 8.49 0 0 1-2.36.64a4.13 4.13 0 0 0 1.81-2.27a8.21 8.21 0 0 1-2.61 1a4.1 4.1 0 0 0-7 3.74a11.64 11.64 0 0 1-8.45-4.29a4.16 4.16 0 0 0-.55 2.07a4.09 4.09 0 0 0 1.82 3.41a4.05 4.05 0 0 1-1.86-.51v.05a4.1 4.1 0 0 0 3.3 4a3.93 3.93 0 0 1-1.1.17a4.9 4.9 0 0 1-.77-.07a4.11 4.11 0 0 0 3.83 2.84A8.22 8.22 0 0 1 3 18.34a7.93 7.93 0 0 1-1-.06a11.57 11.57 0 0 0 6.29 1.85A11.59 11.59 0 0 0 20 8.45v-.53a8.43 8.43 0 0 0 2-2.12Z"
                />
              </svg>
              <svg
                className="footer__icons instagram"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentcolor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <path
                    strokeDasharray="66"
                    strokeDashoffset="66"
                    d="M12 3H8C5.23858 3 3 5.23858 3 8V16C3 18.7614 5.23858 21 8 21H16C18.7614 21 21 18.7614 21 16V8C21 5.23858 18.7614 3 16 3z"
                  >
                    <animate
                      fill="freeze"
                      attributeName="stroke-dashoffset"
                      dur="0.6s"
                      values="66;132"
                    />
                  </path>
                  <path
                    strokeDasharray="26"
                    strokeDashoffset="26"
                    d="M12 8C14.20914 8 16 9.79086 16 12C16 14.20914 14.20914 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8"
                  >
                    <animate
                      fill="freeze"
                      attributeName="stroke-dashoffset"
                      begin="0.7s"
                      dur="0.4s"
                      values="26;0"
                    />
                  </path>
                </g>
                <circle
                  cx="17"
                  cy="7"
                  r="1.5"
                  fill="currentcolor"
                  fillOpacity="0"
                >
                  <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="1.1s"
                    dur="0.4s"
                    values="0;1"
                  />
                </circle>
              </svg>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
