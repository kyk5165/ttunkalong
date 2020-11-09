import Flag from "components/Flag";
import React, { useEffect, useState } from "react";
import { dbService, storageService } from "services/fbase";
import { v4 as uuidv4 } from "uuid";

const FlagBorder = ({ userObj }) => {
  const [attachment, setAttachment] = useState("");
  const [flagTime, setFlagTime] = useState("");
  const [flagViewTime, setFlagViewTime] = useState("");
  const [state, setState] = useState("업로드대기");
  const [flags, setFlags] = useState([]);

  const onAttachmentChange = (event) => {
    const {
      target: { files },
    } = event;
    const theFile = files[0];
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      } = finishedEvent;
      setAttachment(result);
    };
    reader.readAsDataURL(theFile);
  };
  const onClearAttachment = () => clearAttachment();
  const onSubmit = async (event) => {
    event.preventDefault();

    setState("업로드중...");

    const uploadBtn = document.querySelector("#upload_img_btn");
    uploadBtn.setAttribute("disabled", true);
    const attachmentRef = storageService
      .ref()
      .child(`${userObj.uid}/${uuidv4()}`);
    const response = await attachmentRef.putString(attachment, "data_url");
    const attachmentUrl = await response.ref.getDownloadURL();
    console.log(attachmentUrl);
    await dbService.collection("flag").add({
      createdAt: Date.now(),
      creatorId: userObj.uid,
      creatorDisplayName: userObj.displayName,
      attachmentUrl,
      flagTime,
    });
    clearAttachment();
    setState("업로드완료");
    uploadBtn.removeAttribute("disabled");
  };
  const clearAttachment = () => {
    setAttachment("");
    const file = document.querySelector("input[type=file]");
    file.value = "";
  };

  useEffect(() => {
    const today = new Date();
    const hours = today.getHours();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    let flagFormmat = month + "월" + day + "일";
    if (hours >= 22 || hours < 12) {
      setFlagViewTime("플래그 22시");
      setFlagTime(flagFormmat + "22시");
    } else if (hours >= 19) {
      setFlagViewTime("플래그 7시");
      setFlagTime(flagFormmat + "19시");
    } else if (hours >= 12) {
      setFlagViewTime("플래그 12시");
      setFlagTime(flagFormmat + "12시");
    } else {
      setFlagViewTime("플래그 시간오류");
      setFlagTime("flagNoTime");
    }

    dbService
      .collection("flag")
      .where("creatorId", "==", userObj.uid)
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) => {
        const flagArray = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setFlags(flagArray);
      });
  }, [userObj.uid]);

  return (
    <>
      <h1 className="title">플래그 인증</h1>
      <h4>{flagViewTime}</h4>
      <form onSubmit={onSubmit}>
        <input hidden={true} defaultValue={flagTime} />
        <input
          type="file"
          accept="image/*"
          onChange={onAttachmentChange}
          required
        />
        <input
          id="upload_img_btn"
          type="submit"
          value="업로드"
          capture="camera"
          disabled={false}
        />
        {attachment && (
          <div>
            <img src={attachment} width="50px" height="50px" alt="flag" />
            <button onClick={onClearAttachment}>Clear</button>
          </div>
        )}
      </form>
      <h4>{state}</h4>
      {flags.map((flag) => (
        <Flag
          key={flag.id}
          flagObj={flag}
          isOwner={flag.creatorId === userObj.uid}
        />
      ))}
    </>
  );
};
export default FlagBorder;
