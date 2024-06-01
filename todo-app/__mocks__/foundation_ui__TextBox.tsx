import React from "react";

interface TextBoxProps {
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextBox = ({
  placeholder = "Add a new todo",
  onChange,
}: TextBoxProps) => <input placeholder={placeholder || 'Add a new todo'} onChange={onChange} />;

export default TextBox;
