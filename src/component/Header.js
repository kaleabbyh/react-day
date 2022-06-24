import React from "react";

function Header(props) {
  return (
    <div>
      <button onClick={props.greetHandler}>click</button>
    </div>
  );
}

export default Header;
