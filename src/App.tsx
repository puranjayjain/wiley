import { useEffect } from 'react';
import Pointer from './components/pointer/pointer';
import { init } from './logic';

// for splitting css
// import 'splitting/dist/splitting.css';
// import 'splitting/dist/splitting-cells.css';

// import Splitting from 'splitting';

// import './App.css'

function App() {
  useEffect(() => {
    init();
    // initialize Splitting
    // @ts-ignore-next-line
    // Splitting();
  }, []);

  return (
    <>
      <main>
        <div className="page page--header">
          <h1 className="page__title">Wily Crafts</h1>
        </div>
        <section className="content">
          <h2 className="content__title content__title--number">Châtaignier</h2>
          <p className="content__subtitle">Dehumanization experiment with vanilla flavor</p>
          <div className="panel">
            <div className="panel__item">
              <div className="panel__item-imgwrap">
                <img
                  className="panel__item-img"
                  src="/src/assets/img/1.jpg"
                  alt="Some image"
                  width="250"
                  height="360"
                />
              </div>
              <h3 className="panel__item-title">
                <span>Love</span>
                <span>with</span>
                <span>animosity</span>
              </h3>
              <div className="panel__item-subtitle">
                <span>Art Direction</span>
                <h4 data-splitting>Jeremy Boulder Karlsson</h4>
              </div>
              <button className="panel__item-close">
                <span>Close</span>
              </button>
            </div>
            <div className="panel__item">
              <div className="panel__item-imgwrap">
                <img
                  className="panel__item-img"
                  src="/src/assets/img/2.jpg"
                  alt="Some image"
                  width="250"
                  height="360"
                />
              </div>
              <h3 className="panel__item-title">
                <span>Geek</span>
                <span>and</span>
                <span>mango</span>
              </h3>
              <div className="panel__item-subtitle">
                <span>Art Direction</span>
                <h4 data-splitting>Mathilde Trudeaux Matisse</h4>
              </div>
              <button className="panel__item-close">
                <span>Close</span>
              </button>
            </div>
            <div className="panel__item">
              <div className="panel__item-imgwrap">
                <img
                  className="panel__item-img"
                  src="/src/assets/img/3.jpg"
                  alt="Some image"
                  width="250"
                  height="360"
                />
              </div>
              <h3 className="panel__item-title">
                <span>French</span>
                <span>in</span>
                <span>spring</span>
              </h3>
              <div className="panel__item-subtitle">
                <span>Art Direction</span>
                <h4 data-splitting>Jonathan Colamista Zen</h4>
              </div>
              <button className="panel__item-close">
                <span>Close</span>
              </button>
            </div>
          </div>
          <p className="content__foot">Hover and click on a card</p>
        </section>
        <section className="content">
          <h2 className="content__title content__title--number">Le Pêcher</h2>
          <p className="content__subtitle">Automatic adjustable sensation experience</p>
          <div className="panel">
            <div className="panel__item">
              <div className="panel__item-imgwrap">
                <img
                  className="panel__item-img"
                  src="/src/assets/img/4.jpg"
                  alt="Some image"
                  width="250"
                  height="360"
                />
              </div>
              <h3 className="panel__item-title">
                <span>Love</span>
                <span>with</span>
                <span>animosity</span>
              </h3>
              <div className="panel__item-subtitle">
                <span>Art Direction</span>
                <h4 data-splitting>Jeremy Boulder</h4>
              </div>
              <button className="panel__item-close">
                <span>Close</span>
              </button>
            </div>
            <div className="panel__item">
              <div className="panel__item-imgwrap">
                <img
                  className="panel__item-img"
                  src="/src/assets/img/5.jpg"
                  alt="Some image"
                  width="250"
                  height="360"
                />
              </div>
              <h3 className="panel__item-title">
                <span>Geek</span>
                <span>and</span>
                <span>mango</span>
              </h3>
              <div className="panel__item-subtitle">
                <span>Art Direction</span>
                <h4 data-splitting>Mathilde Trudeaux Matisse</h4>
              </div>
              <button className="panel__item-close">
                <span>Close</span>
              </button>
            </div>
            <div className="panel__item">
              <div className="panel__item-imgwrap">
                <img
                  className="panel__item-img"
                  src="/src/assets/img/6.jpg"
                  alt="Some image"
                  width="250"
                  height="360"
                />
              </div>
              <h3 className="panel__item-title">
                <span>French</span>
                <span>in</span>
                <span>spring</span>
              </h3>
              <div className="panel__item-subtitle">
                <span>Art Direction</span>
                <h4 data-splitting>Jonathan Colamista</h4>
              </div>
              <button className="panel__item-close">
                <span>Close</span>
              </button>
            </div>
          </div>
          <p className="content__foot">Hover and click on a card</p>
        </section>
        <div className="page page--footer">
          <a href="https://twitter.com/codrops">@codrops</a>
          <nav className="page__links">
            <a href="http://tympanus.net/Development/ParticleRainEffect/">Previous demo</a>
            <a href="https://tympanus.net/codrops/?p=53892">Article</a>
            <a href="https://github.com/codrops/LettersAnimationLayout">GitHub</a>
          </nav>
          <span className="page__addon">2021</span>
        </div>
      </main>
      <Pointer />
    </>
  );
}

export default App;
