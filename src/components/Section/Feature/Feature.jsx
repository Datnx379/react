import './Feature.css';


function Feature() {
  return (
    <section className="feature">
      <img  alt="dot-3" className="dot-3" />
      <div className="feature-title">
        <h3>CARE FEATURES</h3>
        <h1>Awesome Service With Our Tools</h1>
      </div>
      <div className="feature-grid">
        <div className="feature-item">
          <img  alt="app" />
          <h2>App Development</h2>
          <h5>
            Helping families live intelligently means we are always working to
            bring our customers.
          </h5>
        </div>
        <div className="feature-item">
          <img  alt="cloud" />
          <h2>Cloud Storage</h2>
          <h5>
            Helping families live intelligently means we are always working to
            bring our customers.
          </h5>
        </div>
        <div className="feature-item">
          <img  alt="UX" />
          <h2>UX Planning</h2>
          <h5>
            Helping families live intelligently means we are always working to
            bring our customers.
          </h5>
        </div>
      </div>
    </section>
  );
}

export default Feature;
