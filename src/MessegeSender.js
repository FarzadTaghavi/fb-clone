import React from "react";
import "./MessegeSender.css";
import { Avatar } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmotionIcon from "@material-ui/icons/InsertEmoticon";

function MessegeSender() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="messegeSender">
      <div className="messegeSender__top">
        <Avatar />
        <form>
          <input
            className="messegeSender__input"
            placeholder={`What's on your mind?`}
          />
          <input placeholder="image URL (Optional)" />

          <button onClick={handleSubmit} type="submit">
            hidden submit
          </button>
        </form>
      </div>
      <div className="messegeSender__bottom">
        <div className="messegeSender__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>

        <div className="messegeSender__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>

        <div className="messegeSender__option">
          <InsertEmotionIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessegeSender;
