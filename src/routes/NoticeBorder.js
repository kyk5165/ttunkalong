import Notice from "components/Notice";
import React, { useEffect, useState } from "react";
import { dbService } from "services/fbase";
import "styles/NoticeBorder.css";

const NoticeBorder = ({ userObj, authority }) => {
  const [noticeTitle, setNoticeTitle] = useState("");
  const [noticeContents, setNoticeContents] = useState("");
  const [notices, setNotices] = useState([]);
  const [newNotice, setNewNotice] = useState(false);

  useEffect(() => {
    dbService
      .collection("notices")
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) => {
        const noticeArray = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setNotices(noticeArray);
      });
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    await dbService.collection("notices").add({
      createdAt: Date.now(),
      creatorId: userObj.uid,
      noticeTitle,
      noticeContents,
    });
    setNoticeTitle("");
    setNoticeContents("");
    setNewNotice(false);
  };
  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "notice_title") {
      setNoticeTitle(value);
    } else if (name === "notice_contents") {
      setNoticeContents(value);
    }
  };
  const toggleNoticeWrite = () => {
    setNewNotice((prev) => !prev);
  };
  return (
    <>
      <h1 className="title">공지사항</h1>
      {authority === "admin" && (
        <>
          <span onClick={toggleNoticeWrite}>글쓰기</span>
          {newNotice ? (
            <form
              onSubmit={onSubmit}
              className="notice_form"
              autoComplete="off"
            >
              <input
                className="notice_title"
                name="notice_title"
                type="text"
                placeholder="제목"
                maxLength={60}
                value={noticeTitle}
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
                value={noticeContents}
                onChange={onChange}
                required
              />
              <input type="submit" value="저장" />
            </form>
          ) : (
            <></>
          )}
        </>
      )}

      <div>
        {notices.map((notice) => (
          <Notice
            key={notice.id}
            noticeObj={notice}
            authority={authority}
            isOwner={notice.creatorId === userObj.uid}
          />
        ))}
      </div>
    </>
  );
};
export default NoticeBorder;
