import React from "react";

function ProfilePreview () {
  const name = "Anthony";
  // const name2 = "Haley";
  return (
    <React.Fragment>
      <h4>{name}</h4>
      <button>Tweets</button>
      <button>Following</button>
      <button>Followers</button>
      <hr/>
    </React.Fragment>
  );
}

export default ProfilePreview;