import React from "react";
import { dbService, storageService } from "services/fbase";

const Flag = ({ flagObj, isOwner }) => {
  const onDeleteClick = async () => {
    const ok = window.confirm("삭제하시겠습니까?");
    if (ok) {
      await dbService.doc(`flag/${flagObj.id}`).delete();
      await storageService.refFromURL(flagObj.attachmentUrl).delete();
    }
  };
  return (
    <>
      <div>{flagObj.flagTime}</div>
      <img
        src={flagObj.attachmentUrl}
        width="200px"
        height="200px"
        alt="flag"
      />
      {isOwner && (
        <div>
          <span onClick={onDeleteClick}>[del]</span>
        </div>
      )}
    </>
  );
};

export default Flag;
