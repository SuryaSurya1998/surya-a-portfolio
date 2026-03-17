import { MdEmail, MdPhone, MdLocationOn, MdCopyright } from "react-icons/md";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import "./styles/Contact.css";

const contactCards = [
  {
    icon: <MdEmail />,
    label: "Email",
    value: "ss9965939522@gmail.com",
    href: "mailto:ss9965939522@gmail.com",
  },
  {
    icon: <MdPhone />,
    label: "Phone",
    value: "+91 9965939522",
    href: "tel:+919965939522",
  },
  {
    icon: <FaLinkedinIn />,
    label: "LinkedIn",
    value: "surya-datascientist",
    href: "https://www.linkedin.com/in/surya-datascientist",
  },
  {
    icon: <FaGithub />,
    label: "GitHub",
    value: "SuryaSurya1998",
    href: "https://github.com/SuryaSurya1998",
  },
];

const Contact = () => {
  return (
    <div className="contact-section" id="contact">
      <div className="contact-container section-container">
        {/* Heading */}
        <div className="contact-heading">
          <h2>
            <em>Let's</em> <span><em>Connect</em></span>
          </h2>
          <p className="contact-subtitle">
            Interested in working together or have a question? Feel free to reach out!
          </p>
        </div>

        {/* Contact Cards */}
        <div className="contact-cards">
          {contactCards.map((card) => (
            <a
              key={card.label}
              href={card.href}
              target={card.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="contact-card"
              data-cursor="disable"
            >
              <div className="contact-card-icon">{card.icon}</div>
              <strong className="contact-card-label">{card.label}</strong>
              <span className="contact-card-value">{card.value}</span>
            </a>
          ))}
        </div>

        {/* Location */}
        <div className="contact-location">
          <MdLocationOn />
          <span>Bengaluru &amp; Chennai, India</span>
        </div>

        {/* Footer */}
        <div className="contact-footer">
          <span>Designed and Developed by <span className="accent">Surya A</span></span>
          <span className="contact-copyright"><MdCopyright /> 2026</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
