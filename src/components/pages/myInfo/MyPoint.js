import React from "react";
import { Button } from "react-bootstrap";

const MyPoint = () => {
  return (
    <>
      <section className="mypoint">
        <div className="container">
          <div className="heading">
            <h3> My Point</h3>
            <h1>나의 포인트 정보</h1>
          </div>

          <div className="pointinfo topMargin">
            {/* <div className="currentpoint h2">
              <h5>현재 포인트 10,000 포인트</h5>
            </div> */}
            <table className="table table-borderless h4">
              <tr>
                <th colSpan="3">
                  현재포인트 <span> 10,000 포인트</span>
                </th>
              </tr>
              <tr>
                <td>예금주</td>
                <td>배정현</td>
              </tr>
              <tr>
                <td>은행</td>
                <td>신한</td>
              </tr>
              <tr>
                <td>계좌 정보</td>
                <td>110-404-157790</td>
              </tr>
              <tr>
                <td>환급 신청</td>
                <td>
                  <input
                    type="text"
                    class="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                    placeholder="환급 받을 포인트를 입력하세요"
                  />
                </td>
                <td>
                  <Button variant="primary">신청</Button>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyPoint;
