import React from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessegeSender from "./MessegeSender";

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessegeSender />
    </div>
  );
}

export default Feed;
