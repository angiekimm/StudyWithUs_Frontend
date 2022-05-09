import React from "react";
import Blogdata from "./Blogdata";
import KeyboardDoubleArrowRightRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowRightRounded";

const Blog = () => {
  return (
    <>
      <section className="blog services">
        <div className="container topMargin">
          <div className="heading">
            <h3>Search Result</h3>
            <h1>검색 결과</h1>
          </div>
          <div className="contain grid topMargin">
            {Blogdata.map((val) => {
              return (
                <div className="box">
                  <div className="img">
                    <img src={val.cover} alt="" />
                  </div>
                  <div className="text">
                    <span>{val.date}</span>
                    <h2>{val.title}</h2>
                    <a href="/">
                      참여하기
                      <KeyboardDoubleArrowRightRoundedIcon className="icon" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
