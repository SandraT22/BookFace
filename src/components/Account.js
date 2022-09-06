import React from "react";
import PropTypes from "prop-types";

function Account(props) {
  return (
    <React.Fragment>
      <h6>{props.name}</h6>
      <small>{props.userName}</small>
      <hr />
    </React.Fragment>
  );
}

Account.propTypes = {
  Name: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired
}

export default Account;