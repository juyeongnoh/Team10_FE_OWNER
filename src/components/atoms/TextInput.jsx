import React, { useMemo } from "react";

const getName = (name) => {
  switch (name) {
    case "login":
      return "w-96 h-14 px-4 rounded-xl border border-gray-300 bg-gray-100";
    case "username":
      return "w-64 h-14 px-4 mr-4 rounded-xl border border-gray-300 bg-gray-100";
    case "email": 
      return "w-64 h-14 px-4 mr-4 rounded-xl border border-gray-300 bg-gray-100";
    case "password":
      return "w-96 h-14 px-4 rounded-xl border border-gray-300 bg-gray-100";
    case "phonenumber":
      return "w-96 h-14 px-4 rounded-xl border border-gray-300 bg-gray-100";
    case "registerform-long":
      return "w-96 h-14 px-4 rounded-xl border border-gray-300 bg-gray-100";
    case "registerform-medium":
      return "w-64 h-14 px-4 mr-4 rounded-xl border border-gray-300 bg-gray-100";
    case "registerform-time":
      return "text-black w-[325px] h-14 px-4 rounded-xl border border-gray-300 bg-gray-100";
    default:
      return "";
  }
};
export const TextInput = ({
  placeholder,
  label,
  type,
  name,
  value,
  onChange,
  readOnly,
}) => {
  return (
    <input
      type={type}
      label={label}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      readOnly={readOnly}
      className={`${getName(name)}`}
    />
  );
};