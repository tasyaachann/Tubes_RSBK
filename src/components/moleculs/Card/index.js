import React from "react";
import { Dropdown, Gap } from "../../atoms";
import "./card.scss";

const Card = ({ nama, nim, photo, alt }) => {
  return (
    <div className="container">
      <div className="content">
        <div className="wrapper">
          <div className="photoWrapper">
            <img src={photo} alt={alt} className="avatar"></img>
          </div>
          <p className="name">{nama}</p>
          <p className="nim">{nim}</p>
          <Gap height={40} />
          <Dropdown>
            <option value="">Status</option>
            <option value="1">Jomblo</option>
            <option value="2">Taken</option>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default Card;
