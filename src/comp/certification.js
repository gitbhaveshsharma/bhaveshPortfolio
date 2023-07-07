import React from "react";

const Certification= () => {
  const educationData = [
    {
      course: "Fundamentals of Visualization with Tableau",
      institution: "Coursera",
      credentialId: "T5Z6JBKKYT42",
      completionDate: "2022-11",
    },
    {
      course:
        "People and Soft Skills for Professional and Personal Success Specialization",
      institution: "Coursera",
      credentialId: "2RDFNBHRKASH",
      completionDate: "2022-12",
    },
    {
      course: "IBM Data Science Specialization",
      institution: "Coursera",
      credentialId: "PBNXXACRUL8C",
      completionDate: "2023-01",
    },
    {
      course: "Text Mining and Analytics",
      institution: "Coursera",
      credentialId: "9E3G2PQQH7JD",
      completionDate: "2023-02",
    },
  ];

  return (
    <div>
      <ul className="education-list">
        {educationData.map((education, index) => (
          <li key={index}>
            <h3>{education.course}</h3>
            <p>Institution: {education.institution}</p>
            <p>Credential ID: {education.credentialId}</p>
            <p>Completion Date: {education.completionDate}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Certification;
