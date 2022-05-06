import React from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

function Search() {
  return (
    <>
      <section className="search container">
        <div className="img">
          <img src="./assets/home2.jpeg" alt="" />
        </div>
        <h1>나에게 맞는 스터디 찾기</h1>
        <div className="searchInputs">
          <input type="text" />
          <div className="searchIcon">
            <SearchRoundedIcon />
          </div>
        </div>
      </section>
    </>
  );
}

export default Search;
