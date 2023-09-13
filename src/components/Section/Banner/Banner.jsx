import './Banner.css';


function Banner() {
  return (
    <section className="banner">
      <img  alt="dot-1" className="dot-1" />
      <img  alt="dot-2" className="dot-2" />
      <div className="banner-image">
        <img  alt="" />
      </div>
      <div className="banner-text">
        <h1 className="banner-title-top">
          Our <b>consultation</b> is <br />
          always in sync <br />
          with your strategy
        </h1>
        <h3 className="banner-title-bottom">
          Scelerisque dignissim in leo at magna donec mi metus ipsum <br />
          luctus nam elit sociis luctus et aliquam libero.
        </h3>
        <button className="banner-button">Our Services</button>
      </div>
    </section>
  );
}

export default Banner;
