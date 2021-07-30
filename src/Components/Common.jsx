import React from "react";

const Common = (props) => {
  return (
    <div className="page-content">
      <h3>Welcome to {props.name} page</h3>
      <p>Currently ,This Page content is unavailable</p>
    </div>
  );
};

export default Common;
