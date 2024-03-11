import "../Style/Contact.css";
const Contact = () => {
  return (
    <div id="contact" className="cotactus">
      <div className="contact">
        <h1>
          Love to hear from you,
          <br /> Get in touch 👋
        </h1>
        <div className="details">
          <div className="det">
            <label htmlFor="">Name</label>
            <br />
            <input type="text" />
          </div>
          <div className="det">
            <label htmlFor="">Email</label>
            <br />
            <input type="email" />
          </div>
        </div>
        <div className="message">
          <label htmlFor="">Message</label>
          <br />
          <textarea id="myTextarea" rows="4" cols="50"></textarea>
        </div>
        <br />
        <button>Submit</button>
      </div>
    </div>
  );
};

export default Contact;
