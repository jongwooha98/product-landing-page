// import React, { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

import './App.scss';
import pineapple from './assets/images/pineapple.png';
import mba from './assets/images/mba.jpeg';
import mbp13 from './assets/images/mbp13.jpeg';
import mbp16 from './assets/images/mbp16.jpeg';

// // Scroll to top of page(section) when navigating
// function ScrollToTop() {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   return null;
// }

function App() {
  const handleCollapse = () => {
    document.getElementById('navbarNavDropdown').classList.remove('show');
    document.getElementById('navbarNavToggler').classList.add('collapsed');
    // document.body.classList.toggle('lock-scroll');
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        {/* <ScrollToTop /> */}
        <div className="container-md">
          <button
            className="navbar-toggler"
            id="navbarNavToggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon fa-xs" />
          </button>
          <a className="navbar-brand d-lg-none" href="#">
            <img src={pineapple} alt="" />
          </a>
          <a className="shopping-cart d-lg-none" href="#">
            <i className="bi bi-bag fa-lg" />
          </a>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                  onClick={handleCollapse}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={handleCollapse}>
                  Features
                </a>
              </li>
              <a
                className="d-none d-lg-block mx-4"
                href="#"
                onClick={handleCollapse}
              >
                <img src={pineapple} alt="" />
              </a>
              <li className="nav-item dropdown">
                <a
                  role="button"
                  className="nav-link dropdown-toggle"
                  id="navbarDropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Laptops
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a
                      className="dropdown-item"
                      href="#laptop-air"
                      onClick={handleCollapse}
                    >
                      Laptop Air
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#laptop-pro-13"
                      onClick={handleCollapse}
                    >
                      Laptop Pro 13&#x2033;
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#laptop-pro-16"
                      onClick={handleCollapse}
                    >
                      Laptop Pro 16&#x2033;
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <a className="shopping-cart d-none d-lg-block " href="#">
              <i className="bi bi-bag fa-lg justify-content-end" />
            </a>
          </div>
        </div>
      </nav>
      <div className="main">
        {/* <div className="feature-section" id="features">
          <div className="features">
            <div className="feature__cpu"></div>
            <div className="feature__gpu"></div>
            <div className="feature"></div>
            <div className="feature"></div>
          </div>
        </div> */}
        <div className="product-section" id="products">
          <h1>Which Laptop is right for you?</h1>
          <span>
            <a href="/">Compare all Laptop models</a>
          </span>
          <div className="products">
            {/* Laptop Air */}

            <div id="laptop-air" className="product__main">
              <div className="product__img">
                <img src={mba} alt="" />
              </div>
              <div className="product__name">
                <h2>Laptop Air</h2>
              </div>
              <div className="product__price">From $999</div>
              <div className="product__color">
                <span className="product__color--silver" />
                <span className="product__color--grey" />
                <span className="product__color--gold" />
              </div>
            </div>
            <div className="buy-button">
              <button type="button" className="btn btn-primary buy">
                Buy
              </button>
            </div>
            <div className="spec spec__display">
              <b>13.3&#x2033;</b>
              <p>Macula Display</p>
            </div>
            <div className="spec spec__chip">
              <i class="bi bi-cpu-fill fa-2x" />
              <p>Pineapple P1 chip</p>
            </div>
            <div className="spec spec__ram">
              <i className="fas fa-memory fa-2x" />
              <p>Up to 16GB unified memory</p>
              <p className="text-muted">
                For increased performance and power efficiency
              </p>
            </div>
            <div className="spec spec__storage">
              <b>2TB</b>
              <p>Maximum configurable storage</p>
            </div>
            <div className="spec spec__battery">
              <i class="bi bi-battery-full fa-3x" />
              <p>Up to 18 hours battery life</p>
            </div>
            <div className="spec spec__cam">
              <i className="fas fa-video fa-2x" />
              <p>720p HD webcam</p>
              <p className="text-muted">
                With the image signal processor of P1 for drastically improved
                performance
              </p>
            </div>
            <div className="spec spec__weight">
              <b>2.8 lb.</b>
              <p>Weight</p>
            </div>

            {/* Laptop Pro 13 */}
            <div id="laptop-pro-13" className="product__main">
              <div className="product__img">
                <img src={mbp13} alt="" />
              </div>
              <div className="product__name">
                <h2>Laptop Pro 13&#x2033;</h2>
              </div>

              <div className="product__price">From $1299</div>
              <div className="product__color">
                <span className="product__color--silver" />
                <span className="product__color--grey" />
              </div>
            </div>

            <div className="buy-button">
              <button type="button" className="btn btn-primary buy">
                Buy
              </button>
            </div>
            <div className="spec spec__display">
              <b>13.3&#x2033;</b>
              <p>Macula Display</p>
            </div>
            <div className="spec spec__chip">
              <i class="bi bi-cpu-fill fa-2x" />
              <p>Pineapple P1 chip</p>
              <p className="text-muted">
                Also available with Pineapple Core p5 or p7 processor
              </p>
            </div>
            <div className="spec spec__ram">
              <i className="fas fa-memory fa-2x" />
              <p>Up to 16GB unified memory</p>
              <p className="text-muted">
                For increased performance and power efficiency
              </p>
            </div>
            <div className="spec spec__storage">
              <b>2TB</b>
              <p>Maximum configurable storage</p>
            </div>
            <div className="spec spec__battery">
              <i class="bi bi-battery-full fa-3x" />
              <p>Up to 20 hours battery life</p>
            </div>
            <div className="spec spec__cam">
              <i className="fas fa-video fa-2x" />
              <p>720p HD webcam</p>
              <p className="text-muted">
                With the image signal processor of P1 for drastically improved
                performance
              </p>
            </div>
            <div className="spec spec__weight">
              <b>3.0 lb.</b>
              <p>Weight</p>
            </div>

            {/* Laptop Pro 16 */}
            <div id="laptop-pro-16" className="product__main">
              <div className="product__img">
                <img src={mbp16} alt="" />
              </div>
              <div className="product__name">
                <h2>Laptop Pro 16&#x2033;</h2>
              </div>
              <div className="product__price">From $2399</div>
              <div className="product__color">
                <span className="product__color--silver" />
                <span className="product__color--grey" />
              </div>
            </div>
            <div className="buy-button">
              <button type="button" className="btn btn-primary buy">
                Buy
              </button>
            </div>
            <div className="spec spec__display">
              <b>16&#x2033;</b>
              <p>Macula Display</p>
            </div>
            <div className="spec spec__chip">
              <i className="bi bi-cpu fa-2x" />
              <p>Up to Pinapple Core p9 processor</p>
            </div>
            <div className="spec spec__ram">
              <i className="fas fa-memory fa-2x" />
              <p>Up to 64GB memory</p>
            </div>
            <div className="spec spec__storage">
              <b>8TB</b>
              <p>Maximum configurable storage</p>
            </div>
            <div className="spec spec__battery">
              <i class="bi bi-battery-full fa-3x" />
              <p>Up to 11 hours battery life</p>
            </div>
            <div className="spec spec__cam">
              <i className="fas fa-video fa-2x" />
              <p>720p HD webcam</p>
            </div>
            <div className="spec spec__weight">
              <b>4.3 lb.</b>
              <p>Weight</p>
            </div>
          </div>
        </div>

        <small className="disclaimer">
          <p className="text-muted">
            Disclaimer:
            <br />
            This site was built only for the educational purpose of practicing
            building a product landing page. Images and texts are from certain
            company; however, there is neither an attempt nor an intent to do
            anything with that certain company and its products.
          </p>
        </small>
      </div>
    </div>
  );
}

export default App;
