import React from "react";
import "./search-style.css";

export const Search = (props) => {
  return (
    <div>
      <input
        className="search"
        type="Search"
        placeholder={props.placeholder}
        onInput={props.handleInput}
      ></input>
    </div>
  );
};
