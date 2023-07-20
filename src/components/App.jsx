import React, { useState } from "react";
export default function App() {
  const [fullName, setFullName] = useState({
    fname: "",
    lname: ""
  });
  function inputChange(event) {
    const { name, value } = event.target;
    name === "firstName"
      ? setFullName({
          fname: value,
          lname: fullName.lname
        })
      : setFullName({
          fname: fullName.fname,
          lname: value
        });
  }
  return (
    <div className="App">
      <h1>{`Hello   ${fullName.fname}   ${fullName.lname}`}</h1>
      <input placeholder="first name" name="firstName" onChange={inputChange} />
      <br />
      <br />
      <input
        placeholder="second name"
        name="secondName"
        onChange={inputChange}
      />
    </div>
  );
}
