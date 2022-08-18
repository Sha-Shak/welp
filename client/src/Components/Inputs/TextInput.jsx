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
  required,
}) {
  return (
    <input
      id={id}
      type={type}
      value={value}
      name={name}
      className={
        (half ? "w-1/2 mx-1 " : "w-full ") +
        "rounded-none input max-w-xs input-bordered focus:ring-indigo-500 focus:border-indigo-500 focus:z-10  placeholder-gray-500"
      }
      required={required && "required"}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

export default TextInput;
