import React, { useState, useEffect } from "react";
import "../App.css";

function About() {
  const [about, setAbout] = useState(null);

  const getAboutData = async () => {
    const response = await fetch("./about.json");
    const data = await response.json();
    setAbout(data);
  };

  useEffect(() => {
    getAboutData();
  }, []);

  const loaded = () => (
    <div>
      <div>
        <h2>{about.name}</h2>
        <img src={about.headshot} alt="Profile" style={{ width: "250px", height: "300px" }} />
        <h3>{about.email}</h3>
        <p>{about.bio}</p>
      </div>
    </div>
  );

  return about ? loaded() : <h1>Loading...</h1>;
}

export default About;
