import './Team.css';


function Team() {
  return (
    <section className="team">
      <img alt="dot-6" className="dot-6" />
      <img alt="dot-7" className="dot-7" />
      <div className="team-title">
        <h3>Meet Our Team</h3>
        <h2>Experience Team Members</h2>
      </div>
      <div className="team-items">
        <div className="item">
          <img alt="1" />
          <div className="item-text">
            <h3>Robert C. Simmons</h3>
            <h4>Business Consultant</h4>
          </div>
        </div>
        <div className="item">
          <img alt="2" />
          <div className="item-text">
            <h3>Christopher L. Wagner</h3>
            <h4>Senior Manager</h4>
          </div>
        </div>
        <div className="item">
          <img alt="3" />
          <div className="item-text">
            <h3>Lawrence C. Dickerson</h3>
            <h4>Financial Consultant</h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
