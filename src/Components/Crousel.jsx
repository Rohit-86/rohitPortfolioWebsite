import rohitImage from "../Images/rohit.png";
import "../Style/Crousel.css";
const Crousel = () => {
  return (
    <div className="hero">
      <div className="name">
        <h1>
          I'm Rohit Kumar Singh <br /> a Full Stack Web Developer
        </h1>
      </div>
      <div className="profilepic">
        <img src={rohitImage} alt="Rohit" />
        <a
          href="https://drive.google.com/uc?export=download&id=1BKMr-tbjfqCEOHMXrKu5SveInxzuEjrN"
          download="rohit_resume.pdf"
        >
          <button className="resume-link">ROHIT RESUME</button>
        </a>
      </div>
    </div>
  );
};

export default Crousel;
