import React from "react";
import './About.css';
import profileImg from '../Images/LeeProfile.jpg';

export const About = () => {
  return (
    <div>
      <p>
        <img id="profileImg" src={profileImg} alt="profile" />

        <h4> Hey there, I'm Lee Cohen! </h4>
        I recently graduated with a BSc in Information Systems (GPA: 87).
        I'm looking for an entry-level Data Engineer position. I'm super excited and 
        determined to make it happen! <br></br>
        I'm passionate about numbers and data and am a self-directed learner who pays 
        attention to detail. <br></br>
        During my studies, I developed skills in data analysis and data visualization 
        using Python (NumPy, Pandas, Matplotlib, Seaborn). In addition, I designed databases 
        using diagrams, including ERD, and SQL. <br></br>
        If you're looking for someone who is passionate, motivated, and diligent, 
        I am that person!
      </p>
    </div>
  );
};