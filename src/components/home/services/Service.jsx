import React, { useState } from "react";
import ServicesData from "./ServicesData";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Service = () => {
  // 로그인을 하고 들어오면 true로 바꿔준다.
  const [login, setLogin] = useState(true);

  // 로그인한 id를 저장하는 변수
  const [id, setId] = useState("");
  // 내가 속한 team을 받으면 저장하는 변수
  const [teamlist, setTeamlist] = useState([
    {
      tid: 1,
      team_name: "CS스터디지렁",
    },
    {
      tid: 2,
      team_name: "CS스터디지렁2",
    },
  ]);

  // 로그인정보 back으로 보내고 받아온 내가 속한 team들을 저장해서 뿌려주면 됨!
  // useEffect(() => {
  //   call("/findAllTeams", "POST", id).then((response) => {
  //     setTeamlist(response);
  //   });
  // }, [data]);

  return (
    <>
      <section className="services">
        <div className="container">
          <div className="heading">
            <h3>MY STUDY GROUP</h3>
            <h1>내 스터디 목록</h1>
          </div>
          <div className="contain grid topMargin">
            {/* teamlist를 back에서 받으면 ServicesData를 teamlist로 바꿔준다! */}
            {login ? (
              ServicesData.map((val, index) => {
                return (
                  <>
                    <div className="box">
                      <div className="img">
                        {val.team_image ? (
                          <img src={val.team_image} alt="" />
                        ) : (
                          <img src="./assets/blog/blog1.jpg" />
                        )}
                      </div>
                      <div className="text">
                        <h2>{val.team_name}</h2>
                        <p>
                          {val.start_date} ~ {val.end_date}
                        </p>
                        <div className="studyBtn">
                          <Link
                            to={{
                              pathname: "/chat",
                              state: { tid: val.tid, teamlist: teamlist },
                            }}
                          >
                            <Button size="large">💬 채팅</Button>
                          </Link>
                          <Link to="/studyroom">
                            <Button size="large">📚 스터디룸 입장하기</Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })
            ) : (
              <>
                <h1>로그인 후 이용 가능합니다.</h1>
                <Link to="/account/login">
                  <Button>로그인 페이지 이동</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
