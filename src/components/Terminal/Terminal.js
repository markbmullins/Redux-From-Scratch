import React, { useState } from "react";
import "./Terminal.css";

const Terminal = ({ messages }) => {
  const terminalLength = 16;

  let text;
  if (messages.length < terminalLength) {
    if (messages.length < 1) {
      text = <p className="font">root@10.0.0.1:~$</p>;
    } else {
      text = messages.map((message) => <p className="font">root@10.0.0.1:~$ {message}</p>);
    }
  } else {
    const newMessages = messages.slice(messages.length - 16);
    text = newMessages.map((message) => <p className="font">root@10.0.0.1:~$ {message}</p>);
  }

  return (
    <div id="outline">
      <div id="bar">
        <div id="red"></div>
        <div id="yellow"></div>
        <div id="green"></div>
      </div>
      <div id="screen">{text}</div>
    </div>
  );
};

export default Terminal;
