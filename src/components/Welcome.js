import { useState } from "react";

export default function Welcome(props) {
  return (
    <>
      <h1>Hey {props.name}!</h1>
      <h2>Welcome to Newton School.</h2>
    </>
  );
}
