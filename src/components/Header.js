import React from "react";

function Header() {
  return (
    <React.Fragment>
      <span id="left">
        <button>Home</button>
        <button>Notifications</button> 
        <button>Messages</button>
      </span>
      <span id="right">
        <input type="text"></input>
        <button>Chirp</button>
      </span>
      <br />
    </React.Fragment>
  );
}

export default Header;