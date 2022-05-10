import React from "react";

const MyRefundPoint = () => {
  return (
    <>
      <section className="myrefundpoint">
        <div className="container">
          <div className="heading topMargin">
            <h3>Refund-Point Request Status</h3>
            <h1>환급 신청 현황</h1>
          </div>
          <table class="table table-hover topMargin">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">신청일자</th>
                <th scope="col">환급신청포인트</th>
                <th scope="col">진행상황</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>2022.02.01</td>
                <td>10,000</td>
                <td>진행중</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>2022.02.01</td>
                <td>15,000</td>
                <td>처리완료</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>2021.12.30</td>
                <td>1,000</td>
                <td>처리완료</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default MyRefundPoint;
