import React from "react";

function Picture({ data }) {
  return (
    <div className="website_picture">
      <p className="website_picture_name">攝影師：{data.photographer}</p>
      <div className="picture_box">
        <a href={data.src.large} target="_blank"><img className="picture_size" src={data.src.large} alt="" /></a>
      </div>
    </div>
  );
}

export default Picture;
