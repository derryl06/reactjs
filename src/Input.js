import React from "react";

const Input = (props) => (
  <>
    <label>namabaru:</label>
    <input
      type="text"
      onBlur={(event) => props._ubahprofile2(event.target.value)}
    ></input>
    <br></br>
    <label>umurbaru:</label>
    <input
      type="text"
      onBlur={(event) => props._ubahprofile3(event.target.value)}
    ></input>
    <br></br>
    <input type="button" onClick={props._ubahprofile} value="ubah"></input>
  </>
);

export default Input;
