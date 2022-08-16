import React from "react";

function SubmitButton({ buttonText, type }) {
  return (
    <button type={type} className="btn btn-primary mx-1 rounded-full right-0">
      {buttonText}
    </button>
  );
}

export default SubmitButton;
