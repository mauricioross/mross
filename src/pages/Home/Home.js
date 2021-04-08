import React from "react";
import "./Home.scss";

const Home = () => {
    const photo = "https://ibb.co/v1bxLdM";
  return (
    <div className="home_container">
      <div className="home_container__menu">
       
      </div>
      <div className="home_container__profile">
      <div className="profile_container">
      <img src="https://i.ibb.co/5TdWsjJ/Whats-App-Image-2021-03-09-at-5-39-10-PM.jpg" alt="Whats-App-Image-2021-03-09-at-5-39-10-PM" border="0"></img>
          <div>
            <h1>Mauricio Ross Arevalo</h1>
            <h5>Software Developer - Front</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
