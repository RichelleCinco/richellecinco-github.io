import React from 'react';
import '../css/Works.css';

const galleryImages = [
  'https://richelleCinq.github.io/images/works/BP_triptych.png',
  'https://richelleCinq.github.io/images/works/Buckingham Pewter-final.png',
  'https://richelleCinq.github.io/images/works/ikigai.jpg',
  'https://richelleCinq.github.io/images/works/BP_signage_black.png',
  'https://richelleCinq.github.io/images/works/tomi_logo.jpg',
  'https://richelleCinq.github.io/images/works/Tomi_Mockup_front.png',
  'https://richelleCinq.github.io/images/works/whitewine-momandunuglykids.png',
  'https://richelleCinq.github.io/images/works/beauty-type-poster.png',
  'https://richelleCinq.github.io/images/works/PopUp_book.png',
  'https://richelleCinq.github.io/images/works/amélie_poster_fin.png',
  'https://richelleCinq.github.io/images/works/123-tieyourshoe.png',
  'https://richelleCinq.github.io/images/works/big-spoon-SharpenAI-Motion.png',
  'https://richelleCinq.github.io/images/works/Big-fork-SharpenAI-Motion.png',
  'https://richelleCinq.github.io/images/works/Cacao-SharpenAI-Softness.png',
  'https://richelleCinq.github.io/images/works/coconut-milk-SharpenAI-Softness.png'
];

const Works = () => {
    return (
      <div className="gallery">
        {galleryImages.map((url, index)=> (
          <div className="galleryItem" key={index}>
            <img className="galleryImg" src={url} alt='' />
          </div>
        ))}
      </div>
    );
  };
  
  export default Works;
