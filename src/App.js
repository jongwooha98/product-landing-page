import './App.scss';
import pineapple from './assets/images/pineapple.png';
import mba from './assets/images/mba.jpeg';
import mbp13 from './assets/images/mbp13.jpeg';
import mbp16 from './assets/images/mbp16.jpeg';

// function Feature({ icon, title, description }) {
//   return (
//     <div className="feature">
//       <div className="icon">
//         <i className={icon} />
//         <div className="feature__info">
//           <h3>{title}</h3>
//           <p>{description}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

function App() {
  return (
    <div className="app">
      <header className="header" id="header">
        <img alt="" id="header-img" src={pineapple} />
        <nav className="hav-bar" id="nav-bar">
          <button>
            <a className="nav-link" href="#products">
              Laptops
            </a>
          </button>
          <button>
            <a className="nav-link" href="#"></a>
          </button>
          <button>
            <a className="nav-link" href="#"></a>
          </button>
        </nav>
      </header>
      <div className="product-section">
        <h1>Which Laptop is right for you?</h1>
        <span>
          <a href="/">Compare all Laptop models</a>
        </span>
        <div className="products" id="products">
          {/* Laptop Air */}

          <div className="product__main">
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

          <div className="product__main">
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

          <div className="product__main">
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
      {/* <div id="how-it-works">
        <iframe
          title="video"
          id="video"
          width="420"
          height="315"
          src="https://www.youtube.com/embed/tgbNymZ7vqY"
        ></iframe>
      </div> */}
      {/* <div>
        <form id="form" action="https://www.freecodecamp.com/email-submit">
          <input
            name="email"
            id="email"
            type="email"
            placeholder="Enter your email address"
          ></input>
          <input id="submit" type="submit" value="Get Started"></input>
        </form>
      </div>
      <div id="pricing"></div> */}
    </div>
  );
}

export default App;
