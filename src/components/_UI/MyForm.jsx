import React from "react";

const MyForm = ({
  children,
  classNames,
  action = '#',
  onSubmit,
  title,
  subtitle,
  ...props
}) => {
  return (
    <form className={`${classNames} form`} action={action} onSubmit={onSubmit}>
      {title && <h3 className="form__title">{title}</h3>}
      {subtitle && <p className="form__subtitle">{subtitle}</p>}
      {children}
    </form>
  );
};

export default MyForm;
