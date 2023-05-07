"use client";
import { useState } from "react";
import Main from "../../server/core";

export default function Page() {
  const [aiName, setAiName] = useState("Aurora Ai");
  const [aiRole, setaiRole] = useState("an ai expert on Web Development");
  const [message, setMessage] = useState(
    "write a simple html file with a hello word"
  );
  async function handle() {
    Main({
      _aiName: aiName,
      _aiRole: aiRole,
      _message: message,
    });
  }
  return (
    <main>
      <div>
        <input
          className=""
          placeholder=" Ai Name:"
          onChange={(e) => {
            e.preventDefault();
            console.log(e.currentTarget.value);
            setAiName(e.currentTarget.value);
          }}
        ></input>
        <input
          placeholder=" Ai Role:"
          onChange={(e) => {
            e.preventDefault();
            console.log(e.currentTarget.value);
            setaiRole(e.currentTarget.value);
          }}
        ></input>
        <input
          className="input"
          placeholder=" Message:"
          onChange={(e) => {
            e.preventDefault();
            console.log(e.currentTarget.value);
            setMessage(e.currentTarget.value);
          }}
        ></input>
        <button className="btn" onClick={handle}>
          Click
        </button>
      </div>
    </main>
  );
}
