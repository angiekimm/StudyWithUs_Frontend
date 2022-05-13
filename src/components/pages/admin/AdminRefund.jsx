import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { call } from "../../../service/ApiService";

const AdminRefund = () => {
  // 처음 모든 환급리스트 받아오기
  // useEffect(() => {
  //   calljson("/", "POST").then((response) => setResult(response));
  // }, []);

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
            <div className="refund">
              <div className="heading topMargin">
                <h1>환급리스트</h1>
                <div className="totalpoint">
                  <span>총 포인트 : 23000P</span>
                </div>
                <table className="table">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">예금주</th>
                      <th scope="col">은행명</th>
                      <th scope="col">계좌번호</th>
                      <th scope="col">환급액</th>
                      <th scope="col">진행상황</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td scope="row">배정현</td>
                      <td>농협</td>
                      <td>111-63244-7236-11</td>
                      <td>10000 P</td>
                      <td className="request">환급완료</td>
                    </tr>
                    <tr>
                      <td scope="row">김창환</td>
                      <td>국민</td>
                      <td>123-5325-5325-11</td>
                      <td>7000 P</td>
                      <td className="request">환급요청</td>
                    </tr>
                    <tr>
                      <td scope="row">배정현</td>
                      <td>기업</td>
                      <td>122-5673-6478-22</td>
                      <td>10000 P</td>
                      <td className="request">환급요청</td>
                    </tr>
                  </tbody>
                </table>
                <Button
                  onClick={() => {
                    call("/", "GET");
                  }}
                >
                  완료된 내역 삭제
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminRefund;
