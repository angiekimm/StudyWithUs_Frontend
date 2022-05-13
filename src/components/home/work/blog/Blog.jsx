import React, { useState, useEffect } from "react";
import Blogdata from "./Blogdata";
import KeyboardDoubleArrowRightRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowRightRounded";
import { Link } from "react-router-dom";
import { call } from "../../../../service/ApiService";

const Blog = ({ data }) => {
  //data == 검색키워드 : back으로 보내야할 데이터

  //백에서 받아온 team들을 저장할 변수
  const [teamlist, setTeamlist] = useState([]);

  // back에서 검색키워드 통해서 받아온 team들을 저장해서 뿌려주면 됨!
  // useEffect(() => {
  //   call("/findAllTeams", "POST", data).then((response) => {
  //     setTeamlist(response);
  //   });
  // }, [data]);

  return (
    <>
      <section className="blog services">
        <div className="container topMargin">
          <div className="heading">
            <h3>Search Result</h3>
            <h1>검색 결과</h1>
          </div>
          <div className="contain grid topMargin">
            {/* back에서 팀 리스트 받아오면 teamlist로 바꾸기 */}
            {Blogdata.map((val, index) => {
              return (
                <div className="box" key={index}>
                  <div className="img">
                    {val.team_image ? (
                      <img src={val.team_image} alt="" />
                    ) : (
                      <img src="./assets/blog/blog1.jpg" />
                    )}
                  </div>
                  <div className="text">
                    <span>
                      {val.start_date} ~ {val.end_date}
                    </span>
                    <h2>{val.team_name}</h2>
                    <Link to="/study/detail">
                      상세보기
                      <KeyboardDoubleArrowRightRoundedIcon className="icon" />
                    </Link>
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
