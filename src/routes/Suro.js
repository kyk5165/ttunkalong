import React, { useState } from "react";

const Suro = () => {
  const [suroTime, setSuroTime] = useState("");
  return (
    <>{suroTime ? <div>수로 => {suroTime}</div> : <div>수로투표중...</div>}</>
  );
};
export default Suro;
