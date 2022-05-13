import React from "react";

const BoardDetail = () => {
  return (
    <>
      <div className="board">
        <div className="container max-w-screen-lg mx-auto topMargin">
          <div className="text-xl font-bold mt-5 mb-3 text-center">
            자유게시판
          </div>
          <table class="table table-bordered topMargin">
            <thead>
              <tr>
                <th scope="col">글 번호</th>
                <td scope="col">5</td>
                <th scope="col">작성일</th>
                <td scope="col">2022-05-06</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">작성자</th>
                <td>이시연</td>
                {/* <td></td> */}
                {/* <td>@mdo</td> */}
              </tr>
              <tr>
                <th scope="row">제목</th>
                <td colSpan="3">Jacob</td>
              </tr>
              <tr>
                <th scope="row">글 내용</th>
                <td colspan="3">Larry the Bird</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default BoardDetail;
