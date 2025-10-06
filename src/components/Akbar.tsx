import React from "react";

const Akbar = () => {
  const click = () => {
    prompt("Kim zor?")
    while (true) {
      console.log("Akbar sila");
    }
  };

  return (
    <div>
      <br />
      <button onClick={click}>Click</button>
    </div>
  );
};

export default Akbar;
