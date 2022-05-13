import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { Input } from "@material-ui/core";
import { calljson } from "../../../service/ApiServiceJson";
import { call } from "../../../service/ApiService";

const AdminStudy = () => {
  const [team, setTeam] = useState("");
  const [result, setResult] = useState([]);

  // 처음 모든 스터디 팀 받아오기
  // useEffect(() => {
  //   calljson("/", "POST", team).then((response) => setResult(response));
  // }, []);

  const onCall = () => {
    calljson("/", "GET", team).then((response) => {
      setResult(response);
    });
  };

  // enter치면 검색하기
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onCall();
    }
  };

  return (
    <>
      <section className="admin">
        <div className="container">
          <div className="heading topMargin">
            <h3>Admin</h3>
            <h1>Admin</h1>
          </div>
          <div className="subtitle">
            <ul>
              <Link to="/admin/refund">
                <li>환급내역</li>
              </Link>
              <Link to="/admin/user">
                <li>사용자 리스트</li>
              </Link>
              <Link to="/admin/study">
                <li>스터디 리스트</li>
              </Link>
            </ul>
          </div>
          <div className="bottomcontainer topMargin">
            <div className="study">
              <div className="heading topMargin">
                <h1>팀 리스트</h1>
                <div className="searchstudy">
                  <Input
                    type="text"
                    placeholder="팀 이름을 입력하세요"
                    value={team}
                    onChange={(e) => setTeam(e.target.value)}
                    //enter
                    onKeyPress={handleKeyPress}
                  />
                  <Button onClick={onCall}>검색</Button>
                  <Button>취소</Button>
                </div>
                <table className="table">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">번호</th>
                      <th scope="col">팀 이름</th>
                      <th scope="col">현재원</th>
                      <th scope="col">총원</th>
                      <th scope="col">누적 참가비</th>
                      <th scope="col">삭제여부</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td scope="row">1</td>
                      <td>CS 모여라</td>
                      <td>4</td>
                      <td>6</td>
                      <td>200</td>
                      <td>
                        <Button
                          onClick={() => {
                            call("/", "GET", team);
                          }}
                        >
                          팀삭제
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td scope="row">2</td>
                      <td>CS</td>
                      <td>3</td>
                      <td>6</td>
                      <td>400</td>
                      <td>
                        <Button>팀삭제</Button>
                      </td>
                    </tr>
                    <tr>
                      <td scope="row">3</td>
                      <td>스프링 공부</td>
                      <td>6</td>
                      <td>6</td>
                      <td>900</td>
                      <td>
                        <Button>팀삭제</Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminStudy;
