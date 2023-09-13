import './About.css';


function About() {
  return (
    <section className="about">
      <div className="about-image">
        <img  alt="dot-4" className="dot-4" />
        <img alt="3" className="rectangle2" />
        <img  alt="2" className="rectangle3" />
      </div>
      <div className="about-text">
        <h3>About</h3>
        <h1>
          Influencer Marketing <br />
          for Your Business
        </h1>
        <h4>
          With over 25 years of experience, we have crafted thousands of
          Strategic discovery process that enables us to peel back the Layers
          which enable us to understand, connect, represent and Dominate your
          market.
        </h4>
        <button>Phone Number: +002698 22 33</button>
      </div>
    </section>
  );
}

export default About;
