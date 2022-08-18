import React from "react";

function SubmitButton({ buttonText, type, disabled }) {
  return (
    <button
      type={type}
      disabled={disabled ? "disabled" : null}
      className="btn btn-primary mx-1 rounded-full right-0"
    >
      {buttonText}
    </button>
  );
}

export default SubmitButton;
