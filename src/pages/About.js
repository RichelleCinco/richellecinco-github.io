import '../css/About.css';

const About = () => {
  return (
    <div className="about-me-container">
      <h1>About Me</h1>
      <div className="about-me-img">
      <img className="my-photo" src="/images/pic.png" alt="Richelle"></img>
      </div>

    <div className="about-me">
      <p>Hi! My name is Richelle Cinco. I started my design journey about five years ago after working
        in the business administration side of things for nearly 15 years. During those days, I always found myself creating and infusing design
        at every chance I got, ranging from my power point presentations, dashboards reports to redesigning department processes for effeciences.</p>

      <p>One day, having not taken any vacations for nearly five years, I decided to plan a big trip to take my family and I to Paris. It was trip
        planned down to a T. It was an exciting moment for us. The morning of our flight, we got in our car and thought we had the right amount of time.
        Wrong! The Bay Area traffic had other plans for a huge accident occured. We showed up 5 minutes too late! Now What? With no specific
        plans, determined to make this vacation happen, we picked a flight to any country close to France. London it is! Long story short, we never made it to Paris, but
        we made it London with zero plans. We had one of the best times of our lives - zero expectations and just went with the flow. </p>
      <br></br>
      <h2>So why tell this story?</h2>
      <br></br>
      <p>Because the moment I got on the plane to come back home, I decided to change my career and pursue my long-standing passion in design and technology. So here I am,
        taking my Masters in Computer Information Systems in hopes to bridge the gap in my knowledge and skills with technology. It comes with many challenges, but like that
        London trip, I just need to learn to go with the flow and try to have some fun in the process.
      </p>
      </div>
    </div>
  )
};

export default About;