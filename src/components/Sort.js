import "./Sort.css";

import React from "react";

const Sort = (props) => {
  return (
    <div className="button">
      <button className="asc" onClick={props.ascending} >Asc</button>
      <button className="desc" onClick={props.descending} >Desc</button>
    </div>
  );
};

export default Sort;
