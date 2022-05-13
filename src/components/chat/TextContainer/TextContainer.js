import React from "react";
import ServicesData from "../../home/services/ServicesData";

import "./TextContainer.css";

const TextContainer = ({ users, room, teamlist }) => (
  // 받은 tid 값을
  // team name 클릭하면 그에 맞는 메세지창 열어주기

  <>
    <div className="textContainer">
      <div>
        <div className="activeContainer">
          {/* teamlist 받으면 ServicesData teamlist로 변경하기 */}
          <h2>
            {ServicesData.map((val, index) => {
              return <div className="activeItem">{val.team_name}</div>;
            })}
          </h2>
        </div>
      </div>
    </div>
  </>
);

export default TextContainer;
