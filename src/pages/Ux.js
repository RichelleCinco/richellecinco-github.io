import '../css/Ux.css';
import Vimeo from '@u-wave/react-vimeo';

const Ux = () => {
  return (
    <div className="ux">
      <h1>UX</h1>
      <div className="vimeo">
      <Vimeo  video="https://player.vimeo.com/video/707911998?h=9324b79d81&loop=1&title=0&byline=0&portrait=0" 
       frameborder="0" allowfullscreen autoplay loop/> {/*  https://www.npmjs.com/package/@u-wave/react-vimeo */}
     </div>
      
      <div className="content" >
        <p>With User Experience, I learned to apply the Design Thinking Process starting with empathy. This training has
          helped me become a better designer. In contrast to my old knowledge, I now strive to approach design with a meaningful
          purpose, extending beyond aesthetics and facades.</p>
        <p>One of the projects I made was to help address fast-fashion - to choose quality over quantity through the idea of a
          “Capsule Wardrobe.” Using personas, research and statistics, I wanted to create a way to educate, provide an array of
          better clothing options that would transcend fashion trends. I also aimed to boost the user’s confidence in dressing for
          their body type as well as cataloguing their clothes to save time planning "what to wear," including factoring in current
          local weather through an app - this part reminds me of Cher in the movie, Clueless.</p>
        <p>The project below was an iteration of an app to go with a smart trashcan in order to help address United Nations' Goal #12:
          Sustainable Consumption and Production.</p>
      </div>
      
      <div  className="gogreen2">
        <img className="gogreen2-img" src="/images/GoGreen.png" alt="go green project layout"></img>
      </div>
    </div>
  )
};

export default Ux;
