import React from "react";
import { useDispatch } from "react-redux";

const MyTextarea = ({
  classNames,
  placeholder,
  value,
  setValue,
  disabled = false,
  ...props
}) => {
  const dispatch = useDispatch();
  return (
    <textarea
      className={`${classNames} textarea`}
      placeholder={placeholder}
      disabled={disabled}
      value={value}
      onChange={e => dispatch(setValue(e.target.value))}
      {...props}
    ></textarea>
  );
};

export default MyTextarea;
