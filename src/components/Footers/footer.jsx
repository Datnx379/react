import './Footer.css';
import logo from '../../images/footer-logo.svg';
import face from '../../icons/E.svg';
import twit from '../../icons/D.svg';
import inst from '../../icons/Q.svg';

function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-logo">
          <img src={logo} alt="1" />
          <h2>
            2021 Award winning Vaccination <br />
            and Lorem ipsum dolor sit amet
          </h2>
          <img src={face} alt="2" className="icon" />
          <img src={twit} alt="3" className="icon" />
          <img src={inst} alt="4" className="icon" />
        </div>
        <ul>
          Location
          <li>America</li>
          <li>Asia</li>
          <li>Europe</li>
          <li>Africa</li>
        </ul>
        <ul>
          Contact
          <li>About Me</li>
          <li>Teams</li>
          <li>Profile</li>
          <li>FAQ</li>
        </ul>
        <ul>
          Legals
          <li>Privacy</li>
          <li>Disctaimer</li>
          <li>Terms</li>
          <li>Company</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
