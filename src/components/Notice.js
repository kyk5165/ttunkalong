import React, { useState } from "react";
import { dbService } from "services/fbase";

const Notice = ({ noticeObj, authority, isOwner }) => {
  const [editing, setEditing] = useState(false);
  const [newNoticeTitle, setNewNoticeTitle] = useState("");
  const [newNoticeContents, setNewNoticeContents] = useState("");

  const toggleEditing = () => {
    setEditing((prev) => !prev);
    setNewNoticeTitle(noticeObj.noticeTitle);
    setNewNoticeContents(noticeObj.noticeContents);
  };
  const onDeleteClick = async () => {
    const ok = window.confirm("삭제하시겠습니까?");
    if (ok) {
      await dbService.doc(`notices/${noticeObj.id}`).delete();
    }
  };
  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "notice_title") {
      setNewNoticeTitle(value);
    } else if (name === "notice_contents") {
      setNewNoticeContents(value);
    }
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    await dbService.doc(`notices/${noticeObj.id}`).update({
      noticeTitle: newNoticeTitle,
      noticeContents: newNoticeContents,
    });
    setEditing(false);
  };

  return (
    <>
      {editing ? (
        <>
          <form className="notice_form" onSubmit={onSubmit} autoComplete="off">
            <input
              className="notice_title"
              name="notice_title"
              type="text"
              placeholder="제목"
              maxLength={60}
              value={newNoticeTitle}
              onChange={onChange}
              required
            />
            <textarea
              className="notice_contents"
              name="notice_contents"
              cols="40"
              rows="8"
              placeholder="내용"
              maxLength={500}
              value={newNoticeContents}
              onChange={onChange}
              required
            />
            <input type="submit" value="수정하기" />
            <button onClick={toggleEditing}>cancel</button>
          </form>
        </>
      ) : (
        <>
          <h4>{noticeObj.noticeTitle}</h4>
          {isOwner && (
            <>
              <span onClick={toggleEditing}>[edit]</span>
              <span onClick={onDeleteClick}>[del]</span>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Notice;
