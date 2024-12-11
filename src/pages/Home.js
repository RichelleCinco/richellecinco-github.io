import '../css/Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className="greeting">
        <h1><span>Hello, I'm Richelle!</span>  <span className="text-animation"></span></h1>
        <div>
          <p className="whatIdo">I'm a graphic designer from Boise. My works include packaging, UX/UI, typography, photography, paper art, animation, and illustration</p>
        </div>
      </div>

      <article className="contentGrid">

      <section className="section">
          <div class="section-items">
            <Link to="/webdev"> 
              <div >
                <img className="abstractImg" src="/images/abstract1.png" alt="abstract circles" />
              </div>
              <div className="description">
                <h2>Web Development</h2>
                <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Potenti auctor rutrum mi egestas
                  tempor saphabi tincidunt.
                </p>
              </div>
            </Link>
          </div>
        </section>
        
        <section className="section">
          <div class="section-items">
            <Link to="/ux"> 
              <div >
                <img className="abstractImg" src="./images/abstract3.png" alt="abstract pattern" />
              </div>
              <div className="description">
                <h2>UX/UI</h2>
                <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Potenti auctor rutrum mi egestas
                  tempor saphabi tincidunt.
                </p>
              </div>
            </Link>
          </div>
        </section>

        <section className="section">
          <div class="section-items">
            <Link to="/packaging"> 
              <div >
                <img className="abstractImg" src="./images/abstract2.png" alt="abstract pattern"  />
              </div>
              <div className="description">
                <h2>Packaging</h2>
                <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Potenti auctor rutrum mi egestas
                  tempor saphabi tincidunt.
                </p>
              </div>
            </Link>
          </div>
        </section>

        <section className="section">
          <div class="section-items">
            <Link to="/photography">
              <div >
                <img className="abstractImg" src="https://richelleCinq.github.io/images/works/coconut-milk-SharpenAI-Softness.png" alt="abstract pattern" />
              </div>
              <div className="description">
                <h2>Photography</h2>
                <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Potenti auctor rutrum mi egestas
                  tempor saphabi tincidunt.
                </p>
              </div>
            </Link>
          </div>
        </section>

        <section className="section">
          <div class="section-items">
            <Link to="/typography"> 
              <div >
                <img className="abstractImg" src="https://richelleCinq.github.io/images/works/beauty-type-poster.png" alt="abstract pattern"  />
              </div>
              <div className="description">
                <h2>Typography</h2>
                <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Potenti auctor rutrum mi egestas
                  tempor saphabi tincidunt.
                </p>
              </div>
            </Link>
          </div>
        </section>

        <section className="section">
          <div class="section-items">
            <Link to="/art"> 
              <div >
                <img className="abstractImg" src="https://richelleCinq.github.io/images/works/ikigai.jpg" alt="abstract pattern"  />
              </div>
              <div className="description">
                <h2>Art</h2>
                <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Potenti auctor rutrum mi egestas
                  tempor saphabi tincidunt.
                </p>
              </div>
            </Link>
          </div>
        </section>
      </article>
    </>
  )
};

export default Home;
