import React from 'react';
import { Link } from 'react-router-dom';
import img from '@assets/img/logo.svg'
import cl from './Logo.module.scss'

const Logo = ({ classNames, ...props }) => {
  return (
    <Link className={`${classNames} ${cl.logo}`} to="/" {...props}>
      <img src={img} alt="logo qlix.kz" />
    </Link>
  );
};

export default Logo;
