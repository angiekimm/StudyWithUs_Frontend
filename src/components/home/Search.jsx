import React, { useEffect, useState } from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { Button } from "@mui/material";

function Search({ setData }) {
  const [keyword, setKeyword] = useState("");

  // useEffect(() => {
  //   console.log(keyword);
  // }, [keyword]);

  return (
    <>
      <section className="search container">
        <div className="img">
          <img src="./assets/home2.jpeg" alt="" />
        </div>
        <h1>나에게 맞는 스터디 찾기</h1>
        <div className="searchInputs">
          <input
            type="text"
            placeholder="검색어를 입력하세요"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <div className="searchIcon">
            <Button onClick={() => setData(keyword)}>
              <SearchRoundedIcon />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Search;
