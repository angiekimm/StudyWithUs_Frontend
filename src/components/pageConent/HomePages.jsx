import React, { useEffect, useState } from "react";
import Home from "../home/homes/Home";
import Branding from "../home/Branding";
import About from "../home/about/About";
import Service from "../home/services/Service";
import Wrapper from "../home/Wrapper";
import Skill from "../home/Skill";
import WrapperOne from "../home/WrapperOne";
import Work from "../home/work/Work";
import Blog from "../home/work/blog/Blog";
import Search from "../home/Search";

const HomePage = () => {
  //검색키워드 받을 변수
  const [data, setData] = useState("");

  return (
    <>
      {/* 홈화면 대표이미지 */}
      <Home />

      {/* 내 스터디 목록 */}
      <Service />

      {/* 스터디 검색 */}
      <Search setData={setData} />

      {/* 스터디 검색 결과 */}
      <Blog data={data} />

      {/* <Branding /> */}
      {/* <About /> */}
      {/* <Wrapper /> */}
      {/* <Skill /> */}
      {/* <WrapperOne /> */}
      {/* <Work /> */}
    </>
  );
};

export default HomePage;
