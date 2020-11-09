import React, { useState } from "react";
import { dbService } from "services/fbase";
import "styles/Notice.css";

const Notice = ({ noticeObj, authority, isOwner }) => {
  const [editing, setEditing] = useState(false);
  const [newNoticeTitle, setNewNoticeTitle] = useState("");
  const [newNoticeContents, setNewNoticeContents] = useState("");
  const [contentView, setContentView] = useState(false);

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
  const onToggleTitleClick = () => {
    setContentView((prev) => !prev);
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
              className="notice_form_title"
              name="notice_title"
              type="text"
              placeholder="제목"
              maxLength={60}
              value={newNoticeTitle}
              onChange={onChange}
              required
            />
            <textarea
              className="notice_form_contents"
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
        <div className="notice">
          <div className="notice_header">
            <div className="notice_title_and_button">
              <h4 className="notice_title" onClick={onToggleTitleClick}>
                {noticeObj.noticeTitle}
              </h4>
              <div>
                {isOwner && (
                  <>
                    <span onClick={toggleEditing}>[edit]</span>
                    <span onClick={onDeleteClick}>[del]</span>
                  </>
                )}
              </div>
            </div>
            <h4>{noticeObj.creatorDisplayName}</h4>
          </div>
          <div className="notice_contents">
            {contentView && <pre>{noticeObj.noticeContents}</pre>}
          </div>
        </div>
      )}
    </>
  );
};

export default Notice;
