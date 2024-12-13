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
          <div className="section-items">
            <Link to="/webdev"> 
              <div >
                <img className="abstractImg" src="/images/abstract1.png" alt="abstract circles" />
              </div>
              <div className="description">
                <h2>Web Development</h2>
                <p>A look at my recent journey with Web Development.
                </p>
              </div>
            </Link>
          </div>
        </section>
        
        <section className="section">
          <div className="section-items">
            <Link to="/ux"> 
              <div >
                <img className="abstractImg" src="./images/abstract3.png" alt="abstract pattern" />
              </div>
              <div className="description">
                <h2>UX/UI</h2>
                <p>I am aspiring UX Designer who aims to also speak the coding language.
                </p>
              </div>
            </Link>
          </div>
        </section>

        <section className="section">
          <div className="section-items">
            <Link to="/packaging"> 
              <div >
                <img className="abstractImg" src="./images/abstract2.png" alt="abstract pattern"  />
              </div>
              <div className="description">
                <h2>Packaging</h2>
                <p>Showing you one of the areas I find myself like I am at play.
                </p>
              </div>
            </Link>
          </div>
        </section>

        <section className="section">
          <div className="section-items">
            <Link to="/photography">
              <div >
                <img className="abstractImg" src="https://richelleCinq.github.io/images/works/coconut-milk-SharpenAI-Softness.png" alt="abstract pattern" />
              </div>
              <div className="description">
                <h2>Photography</h2>
                <p>I adore photography and how it tells a story based on how the viewer perceives it.
                </p>
              </div>
            </Link>
          </div>
        </section>

        <section className="section">
          <div className="section-items">
            <Link to="/typography"> 
              <div >
                <img className="abstractImg" src="https://richelleCinq.github.io/images/works/beauty-type-poster.png" alt="abstract pattern"  />
              </div>
              <div className="description">
                <h2>Typography</h2>
                <p>I love typography. The world would be a boring place like the absence of color. Can you imagine a world of only Times New Roman?
                </p>
              </div>
            </Link>
          </div>
        </section>

        <section className="section">
          <div className="section-items">
            <Link to="/art"> 
              <div >
                <img className="abstractImg" src="https://richelleCinq.github.io/images/works/ikigai.jpg" alt="abstract pattern"  />
              </div>
              <div className="description">
                <h2>Art</h2>
                <p>Like packaging, this is when I am full at play. I can be lost for hours in my head and the pieces I work on.
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
