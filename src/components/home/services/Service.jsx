import React from "react";
import ServicesData from "./ServicesData";

const Service = () => {
  return (
    <>
      <section className="services">
        <div className="container">
          <div className="heading">
            <h3>MY STUDY GROUP</h3>
            <h1>MY STUDY GROUP</h1>
          </div>
          <div className="contain grid topMargin">
            {ServicesData.map((val) => {
              return (
                <>
                  <div className="box">
                    <div className="img">
                      <img src={val.cover} alt="" />
                    </div>
                    <div className="text">
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
