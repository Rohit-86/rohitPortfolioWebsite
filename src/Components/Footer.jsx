import "../Style/Footer.css";
import home from "../Images/home.png";
import location from "../Images/maps-and-flags.png";
import phone from "../Images/phone-call.png";
const Footer = () => {
  return (
    <>
      <div class="footer">
        <div className="intro2">
          <h2>Rohit Kumar Singh</h2>
          <p>
            A Full Stack focused Web Developer building the Websites and Web
            Applications that leads to the success of the overall product.
          </p>
        </div>
        <div className="address">
          <div className="add">
            <img src={home} alt="" />
            <p>Bihar, India</p>
          </div>
          <div className="add">
            <img src={location} alt="" />
            <p>Bengaluru, India</p>
          </div>
          <div className="add">
            <img src={phone} alt="" />
            <p>+91 - 7067960334</p>
          </div>
        </div>
      </div>
      <div className="madeby">
        <span>
          Made by <b>Rohit Kumar Singh</b>
        </span>
      </div>
    </>
  );
};

export default Footer;
