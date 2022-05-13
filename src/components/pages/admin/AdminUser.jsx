import React, { useEffect, useState } from "react";
import { Input } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { calljson } from "../../../service/ApiServiceJson";
import { call } from "../../../service/ApiService";

const AdminUser = () => {
  // back에서 모든 데이터 다 받아온 다음 거르기

  const [id, setId] = useState("");
  // 검색결과 json으로 저장
  const [result, setResult] = useState({ items: [] });

  // 백이랑 연결하고 확인하기
  // console.log(result);

  // 처음 모든 사용자 받아오기
  useEffect(() => {
    calljson("/userListInfo", "GET", null).then((response) => {
      setResult({ items: response });
    });
  }, []);

  useEffect(() => {
    console.log("result");
    console.log(typeof result);
  }, [result]);

  // 검색 기능 함수
  const onCall = () => {
    calljson("/", "GET", id).then((response) => {
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
            <div className="user">
              <div className="heading topMargin">
                <h1>사용자 리스트</h1>
                <div className="searchuser">
                  <Input
                    type="text"
                    placeholder="사용자 아이디를 입력하세요"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
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
                      <th scope="col">이름</th>
                      <th scope="col">아이디</th>
                      <th scope="col">비밀번호</th>
                      <th scope="col">포인트</th>
                      <th scope="col">삭제여부</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* result.map 으로 돌리기 / 번호 컬럼은 index로 */}
                    {/* {result.map((item, index) => {
                      return (
                        <tr>
                          <td scope="row">{item.uuid}</td>
                          <td>{item.userName}</td>
                          <td>{item.userID}</td>
                          <td>{item.pw}</td>
                          <td>{item.point}</td>
                          <td>
                            <Button
                              onClick={() => {
                                call("/", "GET", id);
                              }}
                            >
                              회원삭제
                            </Button>
                          </td>
                        </tr>
                      );
                    })} */}
                    <tr>
                      <td scope="row">1</td>
                      <td>배정현</td>
                      <td>2</td>
                      <td>2</td>
                      <td>9990808</td>
                      <td>
                        {/* id 값을 back으로 보내주기! 삭제하기! */}
                        <Button
                          onClick={() => {
                            call("/", "GET", id);
                          }}
                        >
                          회원삭제
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td scope="row">2</td>
                      <td>천예원</td>
                      <td>55</td>
                      <td>5</td>
                      <td>1000</td>
                      <td>
                        <Button>회원삭제</Button>
                      </td>
                    </tr>
                    <tr>
                      <td scope="row">3</td>
                      <td>배정현</td>
                      <td>333</td>
                      <td>3</td>
                      <td>1000</td>
                      <td>
                        <Button>회원삭제</Button>
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

export default AdminUser;
