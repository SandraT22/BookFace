import React from "react";
import Post from "./Post";

const mainPostList = [
  {
    userName: "bigby",
    timeStamp: "8/29/2022",
    content: "I am posting on BookFace from the past!"
  },
  {
    userName: "crebbous",
    timeStamp: "8/30/2022",
    content: "guys my dog is so cute! he's the best."
  },
  {
    userName: "bigby",
    timeStamp: "9/2/2022",
    content: "Can anyone tell me what year it is?"
  },
  {
    userName: "crebbous",
    timeStamp: "9/3/2014",
    content: "it's 2014"
  },
  {
    userName: "bigby",
    timeStamp: "9/3/2014",
    content: "thanks @crebbous"
  }
];

function PostList(){
  return (
    <React.Fragment>
      <hr/>
      <h4>Recent Posts</h4>
      {mainPostList.map((post, index) =>
        <Post userName={post.userName}
        timeStamp={post.timeStamp}
        content={post.content}
        key={index}/>
      )}
    </React.Fragment>
  );
}

export default PostList;