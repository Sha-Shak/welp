import React from "react";

function TextInput({
  half,
  id,
  value,
  label,
  name,
  placeholder,
  type,
  onChange,
}) {
  return (
    <input
      id={id}
      type={type}
      value={value}
      name={name}
      className={
        (half ? "w-1/2 " : "w-full ") +
        "rounded-none input max-w-xs input-bordered focus:ring-indigo-500 focus:border-indigo-500 focus:z-10  placeholder-gray-500"
      }
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

export default TextInput;
