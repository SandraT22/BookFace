import React from "react";
import Header from "./Header";
import PostList from "./PostList";
import AccountList from "./AccountList";
import ProfilePreview from "./ProfilePreview";

function App() {
  return (
    <React.Fragment>
      <Header />
      <hr />
      <div class="row">
        <div class="col-3">
          <ProfilePreview />
        </div>
        <div class="col-5">
          <PostList />
        </div>
        <div class="col-3">
          <AccountList />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;