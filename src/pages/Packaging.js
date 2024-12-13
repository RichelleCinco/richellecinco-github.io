
import '../css/Packaging.css';

const Packaging = () => {
    return (
    <>
    <section>
            <div className="row padded">
                <div className="onecolumn">
                    <img src="https://richelleCinq.github.io/images/works/BP_triptych.png" alt="packaging triptych"></img>
                </div>
            </div>
        </section>

        <section>
            <div className="row">
                <div className="onecolumn" id="h1-text-black">
                    <span>
                        <h1 className="header">Packaging</h1>
                        <p>I love packaging. As much as I enjoy the digital aspects of my work, there is something to be said about being able to physically touch what you're creating. Three-dimensional objects are an area I am comfortable with.</p>
                        <p>My packaging design for Buckingham Pewter, a pewter company based in Australia, who pride themselves on quality products that have stood the test of time, started with the redesign of their logo as part of the rebranding project. To celebrate history and stories to be told for generations, I wanted to bring this beautiful old-world craftsmanship into the 21st century.</p>
                        <p>Tomi, on the other hand was a packaging idea for a fictitious company I created based on five different words provided as part of the project requirements. Tomi is a plant-based supplement for toddlers. Its name is a portmanteau of the words “toddler” and “milk”. With the market saturated with a lot of milk products, I opted for a different type of packaging not only for the intent of standing out on the shelves, but also for functionality reasons taking into consideration user need for something that is portable and easy for parents to use who have their hands full, especially, when they are on the go with young children.</p>
                    </span>
                    </div>
            </div>
        </section>

        <section>
            <div className="row">
                <div>
                    <div className="twocolumn padded">
                        <img src="tomi_logo.png" alt="Tomi Toddler Milk Logo"></img>
                    </div>
                    <div className="twocolumn">
                        <img src="Tomi_Mockup_front.png" alt="Tomi Toddler Milk Packaging"></img>
                    </div>
                </div>
            </div>
        </section>
    </>
        )
  };
  
  export default Packaging;
