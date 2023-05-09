import React from "react";

function Search({ getImg, setInput }) {
  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="search_box">
      <input className="search_input" type="text" onChange={inputHandler} name="" id="" />
      <span onClick={getImg}><i className="uil uil-search search_icon"></i></span>
    </div>
  );
}

export default Search;
