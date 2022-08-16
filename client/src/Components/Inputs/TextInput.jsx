import React from "react";

function TextInput({ half, value, label, name, placeholder, type, onChange }) {
  return (
    <input
      type={type}
      value={value}
      name={name}
      className={
        (half ? "w-50 " : "w-full ") +
        "rounded-none input max-w-xs input-bordered"
      }
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

export default TextInput;
