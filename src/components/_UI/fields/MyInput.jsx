import React from "react";
import { useDispatch } from "react-redux";

const MyInput = ({
  classNames,
  type = "text",
  placeholder = 'Type some...',
  value,
  setValue,
  disabled = false,
  ...props
}) => {
  const dispatch = useDispatch()
  return (
    <input
      className={`${classNames} input`}
      type={type}
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      onChange={e => dispatch(setValue(e.target.value))}
      {...props}
    />
  );
};

export default MyInput;
