import whatsapp from "../Images/whatsapp.png";
import twitter from "../Images/twitter.png";
import telegram from "../Images/telegram.png";
import email from "../Images/email.png";
import instagram from "../Images/instagram.png";
import facebook from "../Images/facebook.png";
import linkedin from "../Images/linkedin.png";
import github from "../Images/code.png"; // Assuming your GitHub icon is named github.png
import "../Style/Socialmedia.css";

const Socialmedia = () => {
  return (
    <div className="socialmedia">
      <a
        href="https://api.whatsapp.com/send/?phone=9128008655&text&type=phone_number&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={whatsapp} alt="WhatsApp" />
      </a>
      <a
        href="https://twitter.com/khiladi_RKS"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={twitter} alt="Twitter" />
      </a>
      <a
        href="https://t.me/rohit_kr_sing"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={telegram} alt="Telegram" />
      </a>
      <a
        href="mailto:singh748830@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={email} alt="Email" />
      </a>
      <a
        href="https://www.instagram.com/rohit_kr_singh__/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={instagram} alt="Instagram" />
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=100007167481575&mibextid=ZbWKwL"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={facebook} alt="Facebook" />
      </a>
      <a
        href="https://www.linkedin.com/in/rohit-kumar-singh-129a451a4/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={linkedin} alt="LinkedIn" />
      </a>
      <a
        href="https://github.com/Rohit-86"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={github} alt="GitHub" />
      </a>
    </div>
  );
};

export default Socialmedia;
