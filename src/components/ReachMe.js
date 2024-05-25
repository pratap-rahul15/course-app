import React from "react";

const ReachMe = () => {
  const linkedInUrl = "https://www.linkedin.com/in/your-linkedin-profile-name"; 
  const emailAddress = "rahul660singh@gmail.com"; 

  return (
    <div>
      <p>You can reach me at:</p>
      <ul>
        <li>
          <a href={linkedInUrl} target="_blank">
            LinkedIn
          </a>
        </li>
        <li>
          <a href={`mailto:${emailAddress}`} target="_blank">
            Email
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ReachMe;
