import React, { useState } from "react";

const MyUseState003 = () => {
  const [names, setNames] = useState(["고수", "여진구", "송중기"]);
  const [input, setInput] = useState("");

  const handleChangeNames = (e) => {
    setInput(e.target.value);
    console.log(e.target.value);
  };

  const handleClick = () => {
    setNames([input, ...names]);
    setInput("");
    console.log(`input:${input}`);
  };
  return (
    <div>
      <input
        type="text"
        id="fname"
        onChange={handleChangeNames}
        value={input}
      />
      <button onClick={handleClick}>ADD</button>
      {names.map((value, index) => {
        return <p key={index}>{value}</p>;
      })}
    </div>
  );
};

export default MyUseState003;
