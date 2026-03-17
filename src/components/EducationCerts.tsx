import { MdOpenInNew } from "react-icons/md";
import "./styles/EducationCerts.css";

const education = [
  {
    period: "2019 – 2021",
    degree: "Master in Data Science",
    institution: "Ramakrishna Mission Vivekananda Educational and Research Institute",
    cgpa: "7.21",
  },
  {
    period: "2016 – 2019",
    degree: "Bachelors in Physics",
    institution: "Sri Ramakrishna Mission Vidyalaya College of Arts and Science",
    cgpa: "7.2",
  },
];

const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services Training and Certification",
    issued: "Sep 2023",
    expires: "Sep 2026",
    credentialUrl:
      "https://www.credly.com/badges/373cd2f3-98eb-4dbd-a771-ea9557803d02/public_url",
  },
  {
    title: "AWS Academy Cloud Foundation",
    issuer: "Amazon Web Services Training and Certification",
    issued: null,
    expires: null,
    credentialUrl: null,
  },
];

const AwsLogo = () => (
  <svg viewBox="0 0 80 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="aws-logo">
    <text x="0" y="32" fontSize="28" fontWeight="800" fill="#FF9900" fontFamily="Arial, sans-serif">aws</text>
    <path d="M24 36 Q40 42 56 36" stroke="#FF9900" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
  </svg>
);

const EducationCerts = () => {
  return (
    <div className="edu-certs-section">
      <div className="edu-certs-container section-container">
        {/* Education */}
        <div className="edu-col">
          <h3 className="edu-heading">Education</h3>
          <div className="edu-cards">
            {education.map((edu) => (
              <div className="edu-card" key={edu.degree}>
                <span className="edu-period">{edu.period}</span>
                <strong className="edu-degree">{edu.degree}</strong>
                <span className="edu-institution">{edu.institution}</span>
                <span className="edu-cgpa">CGPA: {edu.cgpa}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="cert-col">
          <h3 className="edu-heading">Certifications</h3>
          <div className="cert-cards">
            {certifications.map((cert) => (
              <div className="cert-card" key={cert.title}>
                <div className="cert-card-top">
                  <div className="cert-info">
                    <strong className="cert-title">{cert.title}</strong>
                    <span className="cert-issuer">{cert.issuer}</span>
                    {cert.issued && (
                      <span className="cert-dates">
                        Issued: {cert.issued} | Expires: {cert.expires}
                      </span>
                    )}
                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cert-link"
                        data-cursor="disable"
                      >
                        View Credential <MdOpenInNew />
                      </a>
                    )}
                  </div>
                  <AwsLogo />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationCerts;
