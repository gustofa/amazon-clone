import React from "react";

function MessageBox(props) {
  return (
    // eslint-disable-next-line no-unreachable
    <div className={`alert alert-${props.variant || "info"}`}>
      {props.children}
    </div>
  );
}

export default MessageBox;
