import React from "react";
import { dbService, storageService } from "services/fbase";
import "styles/Flag.css";

const Flag = ({ flagObj, isOwner }) => {
  const onDeleteClick = async () => {
    const ok = window.confirm("삭제하시겠습니까?");
    if (ok) {
      await dbService.doc(`flag/${flagObj.id}`).delete();
      await storageService.refFromURL(flagObj.attachmentUrl).delete();
    }
  };

  return (
    <div className="flag_box">
      <div className="fb_time">{flagObj.flagTime}</div>
      <div className="fb_name">{flagObj.creatorDisplayName}</div>
      <img
        src={flagObj.attachmentUrl}
        width="200px"
        height="200px"
        alt="flag"
      />
      {isOwner && (
        <div className="fb_btn">
          <span onClick={onDeleteClick}>[del]</span>
        </div>
      )}
    </div>
  );
};

export default Flag;
