import React from "react";
import PropTypes from "prop-types";

function Post(props){
  return (
    <React.Fragment>
      <h5>{props.userName} {props.timeStamp}</h5>
      <p>{props.content}</p>
      <hr/>
    </React.Fragment>
  );
}

Post.propTypes = {
  userName: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default Post;