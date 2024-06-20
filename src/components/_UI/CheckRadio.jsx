import React from "react";

const CheckRadio = ({
  classNames,
  textClassName,
  customClassName,
  type,
  label,
  value,
  checked,
  onChange,
  required = false,
}) => {
  return (
    <label className={`${classNames} checkbox-radio ${type}`}>
      <input
        type={type}
        value={value}
        checked={checked}
        onChange={onChange}
        required={required}
      />
      <span className={`${customClassName} checkbox-radio-custom`}>
        <svg
          className=" ico-14 stroke"
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
        >
          <path
            d="M11.6673 3.5L5.25065 9.91667L2.33398 7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className={`checkbox-radio-text ${textClassName}`}>{label}</span>
    </label>
  );
};

export default CheckRadio;
