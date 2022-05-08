import React from "react";
import "./InputField.css";

type InputFieldProps = {
  children: React.ReactNode;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchText: string;
  type?: string;
  id: string;
};

const InputField = ({
  children,
  onChange,
  searchText,
  type = "text",
  id,
}: InputFieldProps) => {
  return (
    <form autoComplete="on">
      <label htmlFor={id}>{children} </label>
      <input
        value={searchText}
        id={id}
        type={type}
        onChange={onChange}
        name="searchtext"
      />
    </form>
  );
};

export default InputField;
